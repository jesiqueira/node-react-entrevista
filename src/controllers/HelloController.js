class HelloController {
  async index(req, res) {
    return res.json({ Hello: 'Tudo bem!!' });
  }
}

export default new HelloController();
