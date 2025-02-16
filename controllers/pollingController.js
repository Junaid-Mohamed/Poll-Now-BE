const Poll = require("../db/polling.models.js");

/**
 * Create a new poll
 */
exports.createPoll = async(req,res) => {
    try{
        const {question, options } = req.body;
        const poll = new Poll({ question, options: options.map((option) => ({ option })) });
        await poll.save();
        res.status(201).json(poll);    
    }catch(error){
        res.status(500).json({error: `Something went wrong while creating poll, ${error.message}`});
    }
}

/**
 * Get all polls
 */
exports.getPolls = async (req, res) => {
    try {
      const polls = await Poll.find();
      res.status(200).json(polls);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
/**
 * submit a poll
 */

exports.vote = async (req, res) => {
    try {
      const votes = req.body.votes; // Expecting { pollId: optionIndex } object
  
      // Process each vote
      const updatePromises = Object.entries(votes).map(async ([pollId, optionIndex]) => {
        const poll = await Poll.findById(pollId);
        if (!poll) return;
  
        poll.options[optionIndex].votes += 1;
        return poll.save();
      });
  
      // Wait for all updates to complete
      await Promise.all(updatePromises);
      
      res.status(200).json({ message: "Votes submitted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };