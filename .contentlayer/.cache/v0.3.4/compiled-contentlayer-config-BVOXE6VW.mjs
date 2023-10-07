// contentlayer.config.js
import { defineDocumentType } from "contentlayer/source-files";
import { makeSource } from "contentlayer/source-remote-files";
import { spawn } from "node:child_process";
var SYNC_INTERVAL = 1e3 * 60;
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    tags: { type: "list", of: { type: "string" }, default: [] },
    lastmod: { type: "date" },
    draft: { type: "boolean" },
    summary: { type: "string" },
    images: { type: "list", of: { type: "string" } },
    authors: { type: "list", of: { type: "string" } },
    layout: { type: "string" },
    bibliography: { type: "string" },
    canonicalUrl: { type: "string" }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath
    },
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.split(".")[0]
    }
  }
}));
var syncContentFromGit = async ({ contentDir, gitTag }) => {
  const startTime = Date.now();
  console.log(`Syncing content files from git (${gitTag}) to ${contentDir}`);
  console.log("\n");
  console.log(`"gitTag: " ${gitTag}`);
  console.log(`"contentDir:" ${contentDir}`);
  const syncRun = async () => {
    const gitUrl = "https://github.com/ZorbaBuda/starter-blog.git";
    await runBashCommand(`
    
      if [ -d  "${contentDir}" ];
        then
          cd "${contentDir}"; git pull;
        else
          git clone --depth 1 --single-branch ${gitUrl} ${contentDir};
      fi
    `);
  };
  let wasCancelled = false;
  let syncInterval;
  const syncLoop = async () => {
    console.log("Syncing content files from git");
    await syncRun();
    if (wasCancelled)
      return;
    syncInterval = setTimeout(syncLoop, 1e3 * 60);
  };
  await syncLoop();
  return () => {
    wasCancelled = true;
    clearTimeout(syncInterval);
  };
};
var runBashCommand = (command) => new Promise((resolve, reject) => {
  const child = spawn(command, [], { shell: `${process.env.SHELL_GIT_BASH}` });
  const logMessages = [];
  child.stdout.setEncoding("utf8");
  child.stdout.on("data", (data) => {
    logMessages.push(data);
    process.stdout.write(data);
  });
  child.stderr.setEncoding("utf8");
  child.stderr.on("data", (data) => {
    logMessages.push(data);
    process.stderr.write(data);
  });
  child.on("close", function(code) {
    if (code === 0) {
      resolve(void 0);
    } else {
      const logStr = logMessages.join("\n");
      reject(
        new Error(`Command failed with exit code ${code}:

${logStr}`)
      );
    }
  });
});
var contentlayer_config_default = makeSource((sourceKey = "main") => ({
  syncFiles: (contentDir) => syncContentFromGit({ contentDir, gitTag: sourceKey }),
  // contentDirPath: `blog-${sourceKey}`,
  contentDirPath: `blogs`,
  // contentDirInclude: [BLOG_DIRECTORY],
  documentTypes: [Post],
  disableImportAliasWarning: true
}));
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-BVOXE6VW.mjs.map
