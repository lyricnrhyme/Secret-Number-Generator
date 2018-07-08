'use strict';
module.exports = function() {
    const randomNum = Math.floor(Math.random() * 1000000);
    return function() {
        return randomNum;
    }
};
