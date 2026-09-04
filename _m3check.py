# -*- coding: utf-8 -*-
import glob, re
voids = {"area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr","path","circle","rect","line","stop","text","use","g" }
for f in sorted(glob.glob("*.html")):
    txt = open(f, encoding="utf-8").read()
    body = re.sub(r"<(script|style)[\s\S]*?</\1>", "", txt)
    stack, ok = [], True
    for m in re.findall(r"<(/?)([a-zA-Z][a-zA-Z0-9]*)\b[^>]*>", body):
        close, tag = m[0], m[1].lower()
        if tag in voids: continue
        if close:
            if stack and stack[-1]==tag: stack.pop()
            else: ok=False; break
        else: stack.append(tag)
    deep = len(re.findall(r"M3 DEEP PART2 END", txt))
    m3c = len(re.findall(r"class=[\"'].*?\bm3-", txt))
    css = "".join(re.findall(r"<style[^>]*>([\s\S]*?)</style>", txt))
    brace = css.count("{") - css.count("}")
    print(f"{f:28} | html-balanced:{ok} | deep:{deep} | m3c:{m3c} | css-brace-delta:{brace}")
print("DONE")