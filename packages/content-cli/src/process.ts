import { spawn } from "node:child_process";

export async function run(command: string, args: string[], cwd: string, environment: NodeJS.ProcessEnv = {}): Promise<void> {
  const usePnpmScript = process.platform === "win32"
    && command === "pnpm"
    && process.env.npm_execpath?.toLowerCase().includes("pnpm");
  const executable = usePnpmScript ? process.execPath : command;
  const executableArgs = usePnpmScript ? [process.env.npm_execpath!, ...args] : args;

  await new Promise<void>((resolve, reject) => {
    const child = spawn(executable, executableArgs, {
      cwd,
      env: { ...process.env, ...environment },
      stdio: "inherit"
    });
    child.on("error", reject);
    child.on("exit", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${command} ${args.join(" ")} exited with code ${code ?? "unknown"}`));
    });
  });
}
