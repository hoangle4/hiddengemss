const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const newGem = new Schema({
  gemCoord: {
    lat: {
      type: Number,
      required: true
    },
    lng: {
      type: Number,
      required: true
    }
  },
  gemName: {
    type: String,
    required: true
  },
  likes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'users'
    }
  ],
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  dateCreated: {
    type: Date,
    default: Date.now
  },
  gemDesc: {
    type: String,
    required: true
  },
  gemStory: {
    type: String,
    required: true
  },
  comments: [
    {
      commentTitle: {
        type: String,
        required: true
      },
      commentMessage: {
        type: String,
        required: true
      },
      commentDate: {
        type: Date,
        default: Date.now
      },
      commentUser: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      }
    }
  ],
  gemPhoto: {
    type: String
  }
});
module.exports = Gem = mongoose.model('gems', newGem);
