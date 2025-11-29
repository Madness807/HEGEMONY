
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Readable } from 'stream';
import { finished } from 'stream/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSETS_DIR = path.join(__dirname, 'src', 'assets', 'images', 'tts');

// Ensure directories exist
['tokens', 'cards'].forEach(dir => {
    const fullPath = path.join(ASSETS_DIR, dir);
    if (!fs.existsSync(fullPath)) {
        fs.mkdirSync(fullPath, { recursive: true });
    }
});

const downloadFile = async (url, dest) => {
    const secureUrl = url.replace('http://', 'https://');
    const res = await fetch(secureUrl, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
    });
    if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.statusText} `);
    const fileStream = fs.createWriteStream(dest, { flags: 'wx' });
    await finished(Readable.fromWeb(res.body).pipe(fileStream));
};

const TOKENS = {
    'money_1.jpg': 'http://cloud-3.steamusercontent.com/ugc/1847037423895301075/B3DFE25B0D6E3A96E31FEE5071EB2C5FAA39EB5D/',
    'money_5.jpg': 'http://cloud-3.steamusercontent.com/ugc/1847037423895297452/8A6CB6936ADD36E4D2EF42CFB4B65D5CEFE8D5BF/',
    'money_10.jpg': 'http://cloud-3.steamusercontent.com/ugc/1847037423895301510/E0FB4866766C64E3D1C47234D2BD54F7CAB82B0E/',
    'money_20.jpg': 'http://cloud-3.steamusercontent.com/ugc/1847037423895299032/5B3819412F6C307146C94171AA994A064380C0FF/',
    'money_50.jpg': 'http://cloud-3.steamusercontent.com/ugc/1847037423895302115/D2263C397AC12690C1E51914765C1A40B8728DDA/',
    'money_100.jpg': 'http://cloud-3.steamusercontent.com/ugc/1847037423895298297/F7B9B69CD02D71BFF2E9AB4650B143EB7EE8339B/',
    'strike.jpg': 'http://cloud-3.steamusercontent.com/ugc/2005820614936580450/DE751E81D8890664618410930DBDD769DB2F31E4/',
    'machinery.jpg': 'http://cloud-3.steamusercontent.com/ugc/1798620010896446097/16770D0B7E4D5A4FBE11CE306724F2FA68B5740D/',
    'free_trade.jpg': 'http://cloud-3.steamusercontent.com/ugc/2005820614936671133/1A67C000F351770B1B26DD1068246E17B8DB5623/',
    'storage.jpg': 'http://cloud-3.steamusercontent.com/ugc/2005820614936675291/95D75DA8C84202D2C02A9BCC89759179A8864457/'
};

const CARDS = {
    'deck_1_face.jpg': 'http://cloud-3.steamusercontent.com/ugc/1957405421788700330/B88EB8FE370B229194694E8E2788EA79D2C72719/',
    'deck_1_back.jpg': 'http://cloud-3.steamusercontent.com/ugc/1957405421788700574/1C07F777D0A0C3C896B3E81502A2E3D546B84841/',
    'deck_2_face.jpg': 'http://cloud-3.steamusercontent.com/ugc/1957405421788711327/1F06B83B93DFFF52C5BCE20776C4CCF06C304FCD/',
    'deck_2_back.jpg': 'http://cloud-3.steamusercontent.com/ugc/1957405421788711666/895E97FAA0DFE5936E75469E2F2A288A62D423EC/',
    'deck_3_face.jpg': 'http://cloud-3.steamusercontent.com/ugc/1957405421788770476/9D36949AA69037FCDAA21BD9D3A22AC45BC48EBB/',
    'deck_3_back.jpg': 'http://cloud-3.steamusercontent.com/ugc/1957405421788770897/9072648F33A96B7E0EF9105849CF9BEAA6B53B35/',
    'deck_4_face.jpg': 'http://cloud-3.steamusercontent.com/ugc/1957405421788778408/89088F549B8F13E442D64EB32AA0D2F65B6ABB3D/',
    'deck_4_back.jpg': 'http://cloud-3.steamusercontent.com/ugc/1957405421788778840/385E1B552B1B6F8CE8A84421D1EC8D303822F982/',
    'events_face.jpg': 'http://cloud-3.steamusercontent.com/ugc/2005820614936417786/8C6869A4468A2B0A7D9588C4F6B7A86377320ACF/',
    'events_back.jpg': 'http://cloud-3.steamusercontent.com/ugc/2005820614936418101/CB13352146B77CCEFDA365A4C0551B5817E265ED/',
    'automa_face.jpg': 'http://cloud-3.steamusercontent.com/ugc/2005820614936435206/40DEF9AEADAC4264016E269CA8EE3BFB56A66DAD/',
    'automa_back.jpg': 'http://cloud-3.steamusercontent.com/ugc/2005820614936435500/D29DA62E9D202F2173AC403235D5134024817C1C/',
    'small_1_face.jpg': 'http://cloud-3.steamusercontent.com/ugc/2005820614936523481/D01739C6D7CADED257F70135B198EA275B1CDFAF/',
    'small_1_back.jpg': 'http://cloud-3.steamusercontent.com/ugc/2005820614936523691/B79AAB1179470DB368585700BC2AC41BCF0F0025/',
    'small_2_face.jpg': 'http://cloud-3.steamusercontent.com/ugc/1957405421788780122/8504F35FFF26C6025699D98FD695E0A750620583/',
    'small_2_back.jpg': 'http://cloud-3.steamusercontent.com/ugc/1957405421788780361/923B839D1EF4DE59F5BED82D0E528E444F54BFE5/',
    'class_1_face.jpg': 'http://cloud-3.steamusercontent.com/ugc/1957405421788695911/0FF0B94231C95F1015BE58522868027F9CE06D95/',
    'class_1_back.jpg': 'http://cloud-3.steamusercontent.com/ugc/1957405421788696146/3F47A62CBD2E2BF4A244C5E3CB3A8B38A2EF022B/',
    'class_2_face.jpg': 'http://cloud-3.steamusercontent.com/ugc/1957405421788697469/FAE6888B9151A0286AB544882CEA27D47D77BB20/',
    'class_2_back.jpg': 'http://cloud-3.steamusercontent.com/ugc/1957405421788697656/2A04E773CC4407890174F7AF74DB73F8EACCB021/',
    'class_3_face.jpg': 'http://cloud-3.steamusercontent.com/ugc/1957405421788698836/BF693C9048321AD02525F6C5842E099C5A68C22D/',
    'class_3_back.jpg': 'http://cloud-3.steamusercontent.com/ugc/1957405421788699092/9E554D5097CA5A74F168ACE2D4E7822AB580D664/',
    'misc_face.jpg': 'http://cloud-3.steamusercontent.com/ugc/2005820614936409740/5B59A6B0F25628F9698439CCA721114659271AA5/',
    'misc_back.jpg': 'http://cloud-3.steamusercontent.com/ugc/1957405421790495473/247E3F436BB1091EF4369C18AE4D37A24C6F5FB2/'
};

async function downloadAll() {
    console.log('Downloading Tokens...');
    for (const [filename, url] of Object.entries(TOKENS)) {
        console.log(`Downloading ${filename}...`);
        await downloadFile(url, path.join(ASSETS_DIR, 'tokens', filename));
    }

    console.log('Downloading Cards...');
    for (const [filename, url] of Object.entries(CARDS)) {
        console.log(`Downloading ${filename}...`);
        await downloadFile(url, path.join(ASSETS_DIR, 'cards', filename));
    }

    console.log('Done!');
}

downloadAll();
