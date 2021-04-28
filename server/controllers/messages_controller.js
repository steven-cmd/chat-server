let messages = [];
let id = 0;

module.exports = {
  create: (req, res) => {
    const { text, time } = req.body;
    messages.push({
      text,
      time,
      id,
    });
    id++;
    res.status(200).send(messages);
  },
  read: (req, res) => {
    res.status(200).send(messages);
  },
  update: (req, res) => {
    const { id } = req.params;
    const { text, time } = req.body;
    const index = messages.findIndex((message) => message.id === +id);
    messages[index] = {
      id: +id,
      text: text || messages[index].text,
      time: time || messages[index].time,
    };
    res.status(200).send(messages);
  },
  delete: (req, res) => {
    const { id } = req.params;
    const index = messages.findIndex((message) => message.id === +id);
    messages.splice(index, 1);
    res.status(200).send(messages);
  },
};
