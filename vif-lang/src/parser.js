function parseVif(vifCode) {
    let htmlOutput = [];
    const vifLines = vifCode.trim().split('\n');

    for (let line of vifLines) {
        line = line.trim();

        if (line.startsWith('vif-version')) continue;

        if (line.startsWith('vif-heading-size-1')) {
            const text = line.split('=')[1].trim().replace(/"/g, '');
            htmlOutput.push(`<h1>${text}</h1>`);
        } else if (line.startsWith('vif-paragraph')) {
            const text = line.split('=')[1].trim().replace(/"/g, '');
            htmlOutput.push(`<p>${text}</p>`);
        }
        // Additional parsing rules can go here
    }

    return htmlOutput.join('\n');
}

module.exports = { parseVif };
