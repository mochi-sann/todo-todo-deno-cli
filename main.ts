import { Command } from "https://deno.land/x/cliffy@v0.24.3/command/mod.ts";
const main = async () => {
  const { args } = await new Command()
    .name("todo-todo-deno-cli")
    .version("0.1.0")
    .description("TODO : Do TODO")
    .arguments("<input:number> [output:number]")
    .parse(Deno.args);
  const TodoCount = args[0];
  let TodoOutput: string = "";
  for (let i = 0; i < TodoCount; i++) {
    TodoOutput = `TODO : ${TodoOutput} をやる`;
  }
  console.log(TodoOutput);
};

main();
