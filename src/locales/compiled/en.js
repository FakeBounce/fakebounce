/*eslint-disable*/
const root_message = require('../en.js');
const home_message = require('../home/en.js');
const cv_message = require('../cv/en.js');
const about_message = require('../about/en.js');
const nav_message = require('../nav/en.js');
const other_message = require('../other/en.js');
const messages = {
  ...root_message.messages,
  ...home_message.messages,
  ...cv_message.messages,
  ...about_message.messages,
  ...nav_message.messages,
  ...other_message.messages
};
export { messages };
