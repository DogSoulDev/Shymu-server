const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const PlaylistSchema = Schema(
  {
    name: {
      type: String,
      required: [true, 'Playlist name is required!'],
      trim: true,
    },
    description: {
      type: String,
      required: false,
    },
    collaborative: {
      type: Boolean,
      required: false,
      default: false,
    },
    thumbnail: {
      type: String,
      trim: true,
      required: false,
    },
    publicAccessible: {
      type: Boolean,
      required: false,
      default: false,
    },
    numberSongs: {
      type: Number,
      default: 0,
    },
    rating: {
      type: Number,
      required: false,
      default: 0.0,
    },
    authorId: {
      type: Schema.Types.ObjectId,
      ref: 'users',
    },
    tracks: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: 'tracks',
        },
      ],
      default: [],
    },
    followedBy: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: 'users',
        },
      ],
      default: [],
    },
    collaborators: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: 'users',
        },
      ],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Playlists = mongoose.model('playlists', PlaylistSchema);

module.exports = Playlists;