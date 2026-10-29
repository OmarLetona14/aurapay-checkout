const fs = require('fs');
let h = fs.readFileSync('index.html', 'utf8');

const target = `            <span>Imprimir / Descargar PDF</span>
          </button>
        </div>
      </div>

    </div>
  <!-- ================= MODAL: CÓDIGO QR PARA MOSTRADOR Y COBRO FÍSICO ================= -->`;

const replacement = `            <span>Imprimir / Descargar PDF</span>
          </button>
        </div>
      </div>

    </div>
  </div>
  <!-- ================= MODAL: CÓDIGO QR PARA MOSTRADOR Y COBRO FÍSICO ================= -->`;

if (h.includes(target)) {
  h = h.replace(target, replacement);
  fs.writeFileSync('index.html', h, 'utf8');
  console.log('Successfully added missing </div> to modal-fel-pdf-backdrop in index.html');
} else {
  console.log('Target string not found (checking CRLF/LF)...');
  const targetCRLF = target.replace(/\n/g, '\r\n');
  const replacementCRLF = replacement.replace(/\n/g, '\r\n');
  if (h.includes(targetCRLF)) {
    h = h.replace(targetCRLF, replacementCRLF);
    fs.writeFileSync('index.html', h, 'utf8');
    console.log('Successfully added missing </div> with CRLF to index.html');
  } else {
    console.log('CRLF target not found either!');
  }
}

