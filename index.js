import { proxy } from "@fly/edge";
import * as marked from 'marked'
import * as yamlFront from 'yaml-front-matter'
const repo = proxy("https://raw.githubusercontent.com/superfly/dns-help/master/providers/");

fly.http.respondWith((req) => {
  const url = new URL(req.url);
  if(url.pathname.endsWith("/")){
    const sourcePath = url.pathname === "/" ? "index.md" : url.pathname.substring(0, url.pathname.length - 1) + ".md"
    const source = new URL(sourcePath, url);
    return getMarkdown(source.toString());
  }
  return repo(req);
})

async function getMarkdown(url){
  let resp = await repo(url)
  if(resp.status !== 200 && resp.headers.get("content-type") !== "text/plain; charset=utf-8"){
    return resp;
  }
  let body = await resp.text();

  const meta = yamlFront.loadFront(body)
  if (meta && meta.__content) {
    body = meta.__content
    meta.__content = undefined
  }

  const html = `<html><head><base href="/"></head><body>${marked(body)}</body></html>`;
  return new Response(html, { status: 200, headers: { "Content-Type": "text/html"}})
}