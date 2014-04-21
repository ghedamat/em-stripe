var ignoreSet = function(func){
  if (arguments.length > 1) {
    var args = [].slice.call(arguments, 0, -1),
        func = [].slice.call(arguments, -1)[0];

    return Em.computed.apply(Em, args.concat([function(key, value) {
      var key = key, value = value;
      func.apply(this);
    }]));

  }
};

export default ignoreSet;
