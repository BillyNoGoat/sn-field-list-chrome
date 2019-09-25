let tr = document.querySelector("tr");
if (tr) {
  tr.querySelectorAll("th.list_hdr").forEach(e => {
    let aTag = e.querySelector("a");
    if (!aTag) return;
    let cType = e.getAttribute("glide_type");
    let cName = e.getAttribute("name");
    let cDescription = aTag.getAttribute("data-original-title");
    e.querySelector("a").setAttribute(
      "data-original-title",
      createAttributeStr(cName, cType, cDescription)
    );
    e.querySelector("a").setAttribute(
      "title",
      createAttributeStr(cName, cType, cDescription)
    );
  });
}

function createAttributeStr(cName, cType, cDescription) {
  return `
		Name: ${cName}
		Type: ${cType}
		${setDescString(cDescription)}
	`;
}

function setDescString(cDescription) {
  if (cDescription) {
    return `Description: ${cDescription}`;
  } else {
    return "";
  }
}
