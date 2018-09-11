const PubSub = {
  publish: function(channel, payload){
    console.log(`publish on ${channel, payload}`);

    const event = new CustomEvent(channel, {detail: payload});
    document.dispatchEvent(event);
  },
  subscribe: function(channel, callback){
    console.log(`subscribe to ${channel}`);
    document.addEventListener(channel, callback);
  }
};

module.exports = PubSub;
