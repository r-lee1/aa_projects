const APIUtil = require('./api_util');

const FollowToggle = function(el) {
  this.$el = $(el);
  this.userId = this.$el.data('user-id');
  this.followState = this.$el.data('initial-follow-state');

  this.render();
  this.$el.on('click', this.handleClick.bind(this));

  console.log("HELLO");
};

FollowToggle.prototype.render = function() {
  if (this.followState === "unfollowed") {
    this.$el.prop('disabled', false);
    this.$el.html('Follow!');
  } else if (this.followState === "followed") {
    this.$el.prop('disabled', false);
    this.$el.html('Unfollow!');
  }
};

FollowToggle.prototype.handleClick = function(event) {
  const followToggle = this;

  event.preventDefault();

  if (this.followState === 'followed') {
    this.followState = 'unfollowing';
    this.render();
    APIUtil.unfollowUser(this.userId).then(() => {
      followToggle.followSate = "unfollowed";
      followToggle.render();
    });
  } else if (this.followState === 'unfollowed') {
    this.followState = 'following';
    this.render();
    APIUtil.followUser(this.userId).then(() => {
      followToggle.followState = 'followed';
      followToggle.render();
    });
  }
};


module.exports = FollowToggle;

// const APIUtil = require('./api_util');
//
// class FollowToggle {
//   constructor(el, options) {
//     this.$el = $(el);
//     this.userId = this.$el.data('user-id') || options.userId;
//     this.followState = (this.$el.data('initial-follow-state') ||
//                         options.followState);
//     this.render();
//
//     this.$el.on('click', this.handleClick.bind(this));
//   }
//
//   handleClick(event) {
//     const followToggle = this;
//
//     event.preventDefault();
//
//     if (this.followState === 'followed') {
//       this.followState = 'unfollowing';
//       this.render();
//       APIUtil.unfollowUser(this.userId).then(() => {
//         followToggle.followState = 'unfollowed';
//         followToggle.render();
//       });
//     } else if (this.followState === 'unfollowed') {
//       this.followState = 'following';
//       this.render();
//       APIUtil.followUser(this.userId).then(() => {
//         followToggle.followState = 'followed';
//         followToggle.render();
//       });
//     }
//   }
//
//   render() {
//     switch (this.followState) {
//       case 'followed':
//         this.$el.prop('disabled', false);
//         this.$el.html('Unfollow!');
//         break;
//       case 'unfollowed':
//         this.$el.prop('disabled', false);
//         this.$el.html('Follow!');
//         break;
//     }
//   }
// }
//
// module.exports = FollowToggle;
