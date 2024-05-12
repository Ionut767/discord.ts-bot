import { PrefixCommandController } from "@/modules/utils/commands";

export default new PrefixCommandController()
  .setData({
    name: "say",
    alias: ["echo"],
    description: "Envia un mensaje a travéz de mi.",
  })
  .Run(async (client, message, args) => {
    try {
      const txt = args.join(" ");
      await message.delete();

      if (!txt)
        return await message.channel.send({
          content: "Tienes que poner el contenido.",
        });

      await message.channel.send({ content: txt });
    } catch (err) {
      console.log(err);
      await message.channel.send({ content: err.message });
    }
  });
