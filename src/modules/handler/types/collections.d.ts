import { CommandInteraction, Message, SlashCommandBuilder } from "discord.js";
import { Bot } from "./Bot.js";
import { PCT, SCT } from "@/modules/utils/types/commands.js";

declare interface Command {
  data: PCT.Data;
  run: PCT.Run;
}

declare interface SlashCommand {
  data: SCT.Data;
  run: SCT.Run;
}

export { Command, SlashCommand };
