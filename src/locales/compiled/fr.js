/*eslint-disable*/
const root_message = require('../fr.js');
const home_message = require('../home/fr.js');
const cv_message = require('../cv/fr.js');
const about_message = require('../about/fr.js');
const nav_message = require('../nav/fr.js');
const other_message = require('../other/fr.js');
const messages = {
  ...root_message.messages,
  ...home_message.messages,
  ...cv_message.messages,
  ...about_message.messages,
  ...nav_message.messages,
  ...other_message.messages
};
export { messages };
