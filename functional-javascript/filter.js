const getMessage = (m) => m.message;
const lenFilter = (m) => getMessage(m).length < 50;

const getShortMessage = (msgs) => msgs.filter(lenFilter).map(getMessage);

module.exports = getShortMessage;
