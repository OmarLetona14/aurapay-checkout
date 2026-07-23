// Initial dynamic transactions mock data conforming to specifications (AuraPay layout)
    let transactions = [
      { 
        transaction_id: 'chk_7x89ab', 
        date: '2026-07-11 10:15', 
        client: 'Carlos Mendoza', 
        status: 'PENDING', 
        amount: 145.00, 
        currency: 'GTQ',
        idempotency_key: 'idemp-98234-x', 
        phone: '5544-3322', 
        type: 'Conversacional',
        merchant: {
          name: 'Cumbre Café',
          subtext: 'Tostaduría de especialidad',
          logo_svg_placeholder: 'CoffeeBagIcon'
        },
        product: {
          title: 'Café de Especialidad Huehuetenango · 340g',
          description: 'Café de origen único cultivado en las tierras altas. Tueste medio, cuerpo sedoso con notas a cacao y panela.'
        },
        token: null, 
        timeline: ['2026-07-11 10:15', null, null, null] 
      },
      { 
        transaction_id: 'chk_5y62bc', 
        date: '2026-07-11 09:30', 
        client: 'Sofía Rodríguez', 
        status: 'PAID', 
        amount: 1250.00, 
        currency: 'GTQ',
        idempotency_key: 'idemp-22918-b', 
        phone: '4433-2211', 
        type: 'Aura Virtual',
        merchant: {
          name: 'TecnoGuate',
          subtext: 'Equipos y repuestos de computación',
          logo_svg_placeholder: 'LaptopIcon'
        },
        product: {
          title: 'Notebook HP EliteBook',
          description: 'Intel i5, 16GB RAM, SSD 512GB. Garantía extendida de 6 meses por tienda.'
        },
        token: 'debito_virtual_banr_002931', 
        auth_number: '982310',
        audit_number: '000104',
        reference_number: 'REF-5y62bc-409',
        payment_date: '2026-07-11 09:33',
        payment_modality: 'Banca Virtual',
        timeline: ['2026-07-11 09:30', '2026-07-11 09:31', '2026-07-11 09:33', '2026-07-11 09:35'] 
      },
      { 
        transaction_id: 'chk_9z12de', 
        date: '2026-07-10 18:22', 
        client: 'Distribuidora El Sol', 
        status: 'PENDING', 
        amount: 890.00, 
        currency: 'GTQ',
        idempotency_key: 'idemp-11029-e', 
        phone: '3322-1100', 
        type: 'Caja Rural',
        merchant: {
          name: 'AgroInsumos El Sol',
          subtext: 'Distribución agroindustrial',
          logo_svg_placeholder: 'LeafIcon'
        },
        product: {
          title: 'Saco de Abono Orgánico Premium · 50kg',
          description: 'Abono ecológico para cultivos cítricos y frutales. Libre de pesticidas.'
        },
        token: null, 
        timeline: ['2026-07-10 18:22', null, null, null] 
      },
      { 
        transaction_id: 'chk_2x45gh', 
        date: '2026-07-10 14:05', 
        client: 'Ana María Gándara', 
        status: 'EXPIRED', 
        amount: 150.00, 
        currency: 'GTQ',
        idempotency_key: 'idemp-44810-z', 
        phone: '5511-6677', 
        type: 'Conversacional',
        merchant: {
          name: 'Academia de Barismo',
          subtext: 'Capacitaciones especializadas',
          logo_svg_placeholder: 'BookIcon'
        },
        product: {
          title: 'Curso Espresso Perfecto Online',
          description: 'Acceso ilimitado a plataforma educativa y sesiones de asesoría vía Zoom.'
        },
        token: null, 
        timeline: ['2026-07-10 14:05', '2026-07-10 15:00', null, null] 
      },
      { 
        transaction_id: 'chk_3w89ij', 
        date: '2026-07-10 11:10', 
        client: 'Juan José Pérez', 
        status: 'PAID', 
        amount: 450.00, 
        currency: 'GTQ',
        idempotency_key: 'idemp-55910-y', 
        phone: '5522-8899', 
        type: 'Aura Virtual',
        merchant: {
          name: 'Café Tools',
          subtext: 'Herramientas y accesorios de barismo',
          logo_svg_placeholder: 'FilterIcon'
        },
        product: {
          title: 'Kit gotero cerámico V60',
          description: 'Gotero cerámico, jarra de vidrio y filtros.'
        },
        token: 'debito_virtual_banr_998102', 
        auth_number: '109284',
        audit_number: '000355',
        reference_number: 'REF-3w89ij-112',
        payment_date: '2026-07-10 11:15',
        payment_modality: 'Banca Virtual',
        timeline: ['2026-07-10 11:10', '2026-07-10 11:12', '2026-07-10 11:15', '2026-07-10 11:18'] 
      },
      { 
        transaction_id: 'chk_a1b2c3', 
        date: '2026-07-12 11:20', 
        client: 'Ferretería El Progreso', 
        status: 'PAID', 
        amount: 3200.00, 
        currency: 'GTQ',
        idempotency_key: 'idemp-99210-x', 
        phone: '5012-3456', 
        type: 'Pago con Tarjeta',
        merchant: {
          name: 'TecnoGuate',
          subtext: 'Equipos y repuestos de computación',
          logo_svg_placeholder: 'LaptopIcon'
        },
        product: {
          title: 'Lote de Herramientas Industriales',
          description: 'Taladro percutor, esmeril y caja de herramientas de metal.'
        },
        token: 'tok_visa_4242_9823_1049', 
        auth_number: '992102',
        audit_number: '000456',
        reference_number: 'REF-a1b2c3-101',
        payment_date: '2026-07-12 11:22',
        payment_modality: 'Tarjeta - Contado',
        billing: {
          need_invoice: true,
          nit: '109823-4',
          client_name: 'Ferretería El Progreso S.A.',
          order_number: 'ORD-9821',
          contact_email: 'facturacion@progreso.com.gt'
        },
        timeline: ['2026-07-12 11:20', '2026-07-12 11:21', '2026-07-12 11:22', '2026-07-12 11:25'] 
      },
      { 
        transaction_id: 'chk_d4e5f6', 
        date: '2026-07-12 09:15', 
        client: 'Manuel Archila', 
        status: 'PAID', 
        amount: 750.00, 
        currency: 'GTQ',
        idempotency_key: 'idemp-10294-y', 
        phone: '5890-1234', 
        type: 'Cuik',
        merchant: {
          name: 'Cumbre Café',
          subtext: 'Tostaduría de especialidad',
          logo_svg_placeholder: 'CoffeeBagIcon'
        },
        product: {
          title: 'Molino de café profesional',
          description: 'Muelas cónicas de acero inoxidable, 30 configuraciones de molienda.'
        },
        token: 'tok_visa_4242_9823_4910', 
        auth_number: '102941',
        audit_number: '000457',
        reference_number: 'REF-d4e5f6-102',
        payment_date: '2026-07-12 09:18',
        payment_modality: 'Cuik',
        billing: {
          need_invoice: false,
          nit: '',
          client_name: '',
          order_number: 'ORD-9822',
          contact_email: 'manuel@archila.me'
        },
        timeline: ['2026-07-12 09:15', '2026-07-12 09:16', '2026-07-12 09:18', '2026-07-12 09:20'] 
      },
      { 
        transaction_id: 'chk_g7h8i9', 
        date: '2026-07-11 15:40', 
        client: 'Lucía Fuentes', 
        status: 'EXPIRED', 
        amount: 550.00, 
        currency: 'GTQ',
        idempotency_key: 'idemp-88291-z', 
        phone: '4011-2233', 
        type: 'Conversacional',
        merchant: {
          name: 'Academia de Barismo',
          subtext: 'Capacitaciones especializadas',
          logo_svg_placeholder: 'BookIcon'
        },
        product: {
          title: 'Taller de Barismo Intermedio',
          description: 'Sesión práctica de 4 horas sobre técnicas de calibración y arte latte.'
        },
        token: null,
        timeline: ['2026-07-11 15:40', '2026-07-11 16:00', null, null] 
      },
      { 
        transaction_id: 'chk_j0k1l2', 
        date: '2026-07-12 14:00', 
        client: 'Distribuidora del Agro', 
        status: 'PENDING', 
        amount: 1800.00, 
        currency: 'GTQ',
        idempotency_key: 'idemp-44910-w', 
        phone: '3022-9988', 
        type: 'Caja Rural',
        merchant: {
          name: 'AgroInsumos El Sol',
          subtext: 'Distribución agroindustrial',
          logo_svg_placeholder: 'LeafIcon'
        },
        product: {
          title: 'Fertilizante Orgánico Premium',
          description: 'Lote de 3 sacos de abono enriquecido para floración.'
        },
        token: null,
        timeline: ['2026-07-12 14:00', null, null, null] 
      },
      { 
        transaction_id: 'chk_m3n4o5', 
        date: '2026-07-11 16:30', 
        client: 'María del Carmen Estrada', 
        status: 'PAID', 
        amount: 1500.00, 
        currency: 'GTQ',
        idempotency_key: 'idemp-44901-k', 
        phone: '5201-9988', 
        type: 'Pago con Tarjeta',
        merchant: {
          name: 'Café Tools',
          subtext: 'Herramientas y accesorios de barismo',
          logo_svg_placeholder: 'FilterIcon'
        },
        product: {
          title: 'Cafetera Espresso Premium',
          description: 'Cafetera espresso de bomba italiana de 15 bares para hogar.'
        },
        token: 'tok_visa_4242_9823_2201', 
        auth_number: '449102',
        audit_number: '000458',
        reference_number: 'REF-m3n4o5-103',
        payment_date: '2026-07-11 16:35',
        payment_modality: 'Tarjeta - Cuotas (3)',
        billing: {
          need_invoice: true,
          nit: '449012-K',
          client_name: 'María del Carmen Estrada',
          order_number: 'ORD-9823',
          contact_email: 'carmen@estrada.com'
        },
        timeline: ['2026-07-11 16:30', '2026-07-11 16:32', '2026-07-11 16:35', '2026-07-11 16:38'] 
      },
      { 
        transaction_id: 'chk_p6q7r8', 
        date: '2026-07-10 17:10', 
        client: 'Tienda La Bendición', 
        status: 'PAID', 
        amount: 95.00, 
        currency: 'GTQ',
        idempotency_key: 'idemp-88102-p', 
        phone: '4201-3344', 
        type: 'Aura Virtual',
        merchant: {
          name: 'Cumbre Café',
          subtext: 'Tostaduría de especialidad',
          logo_svg_placeholder: 'CoffeeBagIcon'
        },
        product: {
          title: 'Café Molido Clásico · 450g',
          description: 'Mezcla especial de tueste oscuro con notas a caramelo y chocolate.'
        },
        token: 'debito_virtual_banr_001948', 
        auth_number: '881023',
        audit_number: '000459',
        reference_number: 'REF-p6q7r8-104',
        payment_date: '2026-07-10 17:15',
        payment_modality: 'Banca Virtual',
        timeline: ['2026-07-10 17:10', '2026-07-10 17:12', '2026-07-10 17:15', '2026-07-10 17:18'] 
      },
      { 
        transaction_id: 'chk_s9t0u1', 
        date: '2026-07-09 10:00', 
        client: 'Constructora Alpha', 
        status: 'EXPIRED', 
        amount: 1200.00, 
        currency: 'GTQ',
        idempotency_key: 'idemp-99102-a', 
        phone: '5588-4422', 
        type: 'Conversacional',
        merchant: {
          name: 'TecnoGuate',
          subtext: 'Equipos y repuestos de computación',
          logo_svg_placeholder: 'LaptopIcon'
        },
        product: {
          title: 'Monitor Profesional de 27 pulgadas',
          description: 'Resolución 4K UHD, panel IPS, cobertura 99% sRGB.'
        },
        token: null,
        timeline: ['2026-07-09 10:00', '2026-07-09 11:30', null, null] 
      },
      { 
        transaction_id: 'chk_v2w3x4', 
        date: '2026-07-09 08:30', 
        client: 'Pedro Armas', 
        status: 'PAID', 
        amount: 350.00, 
        currency: 'GTQ',
        idempotency_key: 'idemp-20194-ped', 
        phone: '4501-2299', 
        type: 'Cuik',
        merchant: {
          name: 'Cumbre Café',
          subtext: 'Tostaduría de especialidad',
          logo_svg_placeholder: 'CoffeeBagIcon'
        },
        product: {
          title: 'Prensa Francesa de Cobre 1L',
          description: 'Diseño elegante con filtro de malla de acero de doble capa.'
        },
        token: 'tok_visa_4242_9823_1029', 
        auth_number: '201948',
        audit_number: '000460',
        reference_number: 'REF-v2w3x4-105',
        payment_date: '2026-07-09 08:32',
        payment_modality: 'Cuik',
        timeline: ['2026-07-09 08:30', '2026-07-09 08:31', '2026-07-09 08:32', '2026-07-09 08:35'] 
      }
    ];

    // LocalStorage sync for transactions (versioned schema)
    const TX_SCHEMA_VERSION = 'v3';
    try {
      const storedVersion = localStorage.getItem('aurapay_tx_version') || localStorage.getItem('aurapay_tx_version');
      const stored = localStorage.getItem('aurapay_transactions') || localStorage.getItem('aurapay_transactions');
      if (stored && (storedVersion === TX_SCHEMA_VERSION || storedVersion === 'v3')) {
        transactions = JSON.parse(stored);
      } else {
        localStorage.setItem('aurapay_transactions', JSON.stringify(transactions));
        localStorage.setItem('aurapay_transactions', JSON.stringify(transactions));
        localStorage.setItem('aurapay_tx_version', TX_SCHEMA_VERSION);
        localStorage.setItem('aurapay_tx_version', TX_SCHEMA_VERSION);
      }
    } catch (e) {
      console.error(e);
    }

    // Products Catalog State Array
    let productsCatalog = [
      {
        id: 'prod_001',
        name: 'Café de Especialidad Huehuetenango (340g)',
        ref: 'SKU-CAF-HUE-340',
        stock: 45,
        base_amount: 134.85,
        max_installments: 6,
        fee_percentage_applied: 7.00,
        price: 145.00,
        description: 'Café de especialidad de Huehuetenango, tueste medio, notas de chocolate y cítricos.',
        image: null
      },
      {
        id: 'prod_002',
        name: 'Prensa Francesa de Cobre (1L)',
        ref: 'SKU-PRE-COP-100',
        stock: 12,
        base_amount: 322.00,
        max_installments: 12,
        fee_percentage_applied: 8.00,
        price: 350.00,
        description: 'Prensa francesa con acabado de cobre elegante, vidrio de borosilicato resistente al calor.',
        image: null
      },
      {
        id: 'prod_003',
        name: 'Molino de Café Manual de Acero',
        ref: 'SKU-MOL-MAN-SS',
        stock: null, // null = sin control de inventario
        base_amount: 259.19,
        max_installments: 3,
        fee_percentage_applied: 5.75,
        price: 275.00,
        description: 'Molino de café manual con muelas de cerámica ajustables, cuerpo de acero inoxidable.',
        image: null
      }
    ];

    // LocalStorage sync for products
    const PROD_SCHEMA_VERSION = 'v2';
    try {
      const storedProdVersion = localStorage.getItem('aurapay_prod_version') || localStorage.getItem('aurapay_prod_version');
      const storedProds = localStorage.getItem('aurapay_products') || localStorage.getItem('aurapay_products');
      if (storedProds && (storedProdVersion === PROD_SCHEMA_VERSION || storedProdVersion === 'v2')) {
        productsCatalog = JSON.parse(storedProds);
      } else {
        localStorage.setItem('aurapay_products', JSON.stringify(productsCatalog));
        localStorage.setItem('aurapay_products', JSON.stringify(productsCatalog));
        localStorage.setItem('aurapay_prod_version', PROD_SCHEMA_VERSION);
        localStorage.setItem('aurapay_prod_version', PROD_SCHEMA_VERSION);
      }
    } catch (e) {
      console.error(e);
    }

    // Administrative User State Array
    let users = [
      { id: 'usr-1', name: 'Administrador General', email: 'admin@aurapay.com.gt', password: 'AuraPay2026*', role: 'admin', status: 'active', lastActive: 'Ahora mismo' },
      { id: 'usr-2', name: 'Cajero de Caja A', email: 'cajero@aurapay.com.gt', password: 'AuraPay2026*', role: 'cajero', status: 'active', lastActive: 'Ayer, 18:22' },
      { id: 'usr-4', name: 'Operador de Catálogo', email: 'operativo@aurapay.com.gt', password: 'AuraPay2026*', role: 'operativo', status: 'active', lastActive: 'Hace 2 horas' }
    ];

    // Global states
    const BASE_NET_SALES = 120400.00;
    
    // Gateway Fee Gross-up variables
    let gateway_fee_usd = 0.15;
    let exchange_rate_usd_to_gtq = 7.90;
    try {
      const storedRate = localStorage.getItem('aurapay_exchange_rate') || localStorage.getItem('aurapay_exchange_rate');
      if (storedRate) exchange_rate_usd_to_gtq = parseFloat(storedRate);
    } catch(e){}

    function updateExchangeRate(val) {
      const rate = parseFloat(val);
      if (isNaN(rate) || rate <= 0) {
        showToast('Tasa Inválida', 'La tasa de cambio debe ser un número positivo.', 'error');
        return;
      }
      exchange_rate_usd_to_gtq = rate;
      try {
        localStorage.setItem('aurapay_exchange_rate', rate.toString());
        localStorage.setItem('aurapay_exchange_rate', rate.toString());
      } catch(e){}
      
      const inputEl = document.getElementById('exchange-rate-usd');
      if (inputEl) inputEl.value = rate.toFixed(2);
      
      updateCalculatedProductPrice();
      updateCalculatedLinkPrice();
      showToast('Tasa Actualizada', `Tasa de cambio fijada en Q ${rate.toFixed(2)} por USD.`);
      addSystemLog('Configuración Modificada', 'seguridad', `Tasa de cambio USD a GTQ actualizada a Q ${rate.toFixed(2)}.`);
    }

    let selectedTransaction = null;
    let currentUser = null; // Session active user
    let userPreLoginAttempt = null; // Stored user during 2FA
    let searchQuery = '';
    let statusFilter = 'all';
    let currentDrawerTab = 'technical';
    let activeSimMethod = 'card';

    // Global notifications array feed
    let notifications = [
      { id: 'notif-1', title: 'Enlace chk_7x89ab Creado', description: 'Q 145.00 emitidos para Academia de Barismo', time: 'Hace 5 min', type: 'create', read: false },
      { id: 'notif-2', title: 'Pago Confirmado', description: 'El cliente completó el pago de chk_3w89ij (Q 450.00)', time: 'Hace 1 hora', type: 'payment', read: false },
      { id: 'notif-3', title: 'Acceso Autorizado', description: 'Usuario de Caja A inició sesión en POS Virtual', time: 'Ayer, 18:22', type: 'security', read: true }
    ];

    // Global audit logs array feed
    let systemLogs = [
      { timestamp: '2026-07-11 22:45:10', event: 'Inicio de Sesión', actor: 'admin@aurapay.com.gt', category: 'seguridad', details: 'Acceso exitoso al panel administrativo con verificación 2FA.' },
      { timestamp: '2026-07-11 22:40:15', event: 'Cobro Creado', actor: 'cajero@aurapay.com.gt', category: 'transaccion', details: 'Enlace chk_5y62bc emitido por Q 1,250.00.' },
      { timestamp: '2026-07-11 22:15:33', event: 'Usuario Desbloqueado', actor: 'admin@aurapay.com.gt', category: 'vendedor', details: 'Se habilitó el acceso al sistema para Usuario de Caja A.' },
      { timestamp: '2026-07-11 18:22:04', event: 'Cierre de Sesión', actor: 'cajero@aurapay.com.gt', category: 'seguridad', details: 'Desconexión del POS Virtual voluntaria.' },
      { timestamp: '2026-07-11 14:05:00', event: 'Falla de Verificación', actor: 'auditor@aurapay.com.gt', category: 'seguridad', details: 'Intento de login fallido (Credenciales incorrectas).' }
    ];

    let logCategoryFilter = 'all';
    let logSearchQuery = '';

    // Global webhooks state
    let webhookSettings = {
      enabled: false,
      url: '',
      secret: 'whsec_aura_checkout_9918a38bcd512',
      events: ['checkout.payment_success', 'checkout.payment_failed']
    };

    // SVG icon generators for smartphone merchant header
    function getMerchantLogoSvg(placeholder) {
      const baseClass = "w-5 h-5 text-gray-500";
      switch(placeholder) {
        case 'CoffeeBagIcon':
          return `<svg class="${baseClass}" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253" /></svg>`;
        case 'LaptopIcon':
          return `<svg class="${baseClass}" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12v10.5a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15.25V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" /></svg>`;
        case 'LeafIcon':
          return `<svg class="${baseClass}" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v18M3 12h18m-9-9c3.333 0 6 3 6 9s-2.667 9-6 9m0-18C8.667 3 6 6 6 12s2.667 9 6 9" /></svg>`;
        case 'BookIcon':
          return `<svg class="${baseClass}" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>`;
        case 'FilterIcon':
          return `<svg class="${baseClass}" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`;
        default:
          return `<svg class="${baseClass}" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 00-.75-.75h-1.5a.75.75 0 00-.75.75V21m-9 0h18M12 3v1.5m0 3v1.5m0 3V12M3 21a9 9 0 1118 0" /></svg>`;
      }
    }

    // Formatter helpers
    const formatCurrency = (val, curr = 'GTQ') => {
      return new Intl.NumberFormat('es-GT', { style: 'currency', currency: curr || 'GTQ' }).format(val);
    };

    const formatDate = (dateObj) => {
      const pad = (n) => n < 10 ? '0' + n : n;
      return dateObj.getFullYear() + '-' + 
             pad(dateObj.getMonth() + 1) + '-' + 
             pad(dateObj.getDate()) + ' ' + 
             pad(dateObj.getHours()) + ':' + 
             pad(dateObj.getMinutes());
    };

    const generateIdempotencyKey = () => {
      return 'idemp-' + Math.floor(10000 + Math.random() * 90000) + '-x';
    };

    const generateTransactionId = () => {
      return 'chk_' + Math.random().toString(36).substr(2, 6);
    };

    // ================= RESPONSIVE SIDEBAR NAVIGATION =================
    function openSidebarMobile() {
      const sidebar = document.getElementById('sidebar');
      const overlay = document.getElementById('sidebar-overlay');
      
      overlay.classList.remove('hidden');
      sidebar.classList.remove('-translate-x-full');
      setTimeout(() => {
        overlay.classList.remove('opacity-0');
        overlay.classList.add('opacity-100');
      }, 10);
    }

    function closeSidebarMobile() {
      const sidebar = document.getElementById('sidebar');
      const overlay = document.getElementById('sidebar-overlay');
      
      overlay.classList.remove('opacity-100');
      overlay.classList.add('opacity-0');
      sidebar.classList.add('-translate-x-full');
      setTimeout(() => {
        overlay.classList.add('hidden');
      }, 300);
    }

    // ================= SECURE LOGIN FLOWS =================
    function showLoginErrorModal(title, message) {
      document.getElementById('login-error-title').innerText = title;
      document.getElementById('login-error-msg').innerText = message;
      
      const modal = document.getElementById('modal-login-error');
      const content = document.getElementById('login-error-content');
      
      modal.classList.remove('hidden');
      setTimeout(() => {
        modal.classList.remove('opacity-0');
        modal.classList.add('opacity-100');
        content.classList.remove('scale-95');
        content.classList.add('scale-100');
      }, 10);
    }

    function closeLoginErrorModal() {
      const modal = document.getElementById('modal-login-error');
      const content = document.getElementById('login-error-content');
      
      modal.classList.remove('opacity-100');
      modal.classList.add('opacity-0');
      content.classList.remove('scale-100');
      content.classList.add('scale-95');
      setTimeout(() => {
        modal.classList.add('hidden');
      }, 200);
    }

    function fillDemoCredentials(role) {
      const emailInput = document.getElementById('login-email');
      const passInput = document.getElementById('login-password');
      
      let email = '';
      if (role === 'admin') email = 'admin@aurapay.com.gt';
      else if (role === 'cajero') email = 'cajero@aurapay.com.gt';
      else if (role === 'operativo') email = 'operativo@aurapay.com.gt';
      
      emailInput.value = email;
      passInput.value = 'AuraPay2026*';
      
      // Auto focus password for smooth UX
      setTimeout(() => passInput.focus(), 150);
    }

    function togglePasswordVisibility(inputId) {
      const input = document.getElementById(inputId);
      const icon = document.getElementById(`eye-icon-${inputId}`);
      if (input.type === 'password') {
        input.type = 'text';
        icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />`;
      } else {
        input.type = 'password';
        icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><circle cx="12" cy="12" r="3" /></svg>`;
      }
    }

    function handle2FAKeyDown(event, index) {
      const key = event.key;
      const input = event.target;

      if (key === 'Backspace') {
        if (input.value.length === 0 && index > 1) {
          event.preventDefault();
          const prev = document.getElementById(`pin-${index - 1}`);
          if (prev) {
            prev.value = '';
            prev.focus();
          }
        } else {
          input.value = '';
        }
      } else if (key === 'ArrowLeft' && index > 1) {
        document.getElementById(`pin-${index - 1}`).focus();
      } else if (key === 'ArrowRight' && index < 6) {
        document.getElementById(`pin-${index + 1}`).focus();
      }
    }

    function focusNext2FACell(input, index) {
      input.value = input.value.replace(/\D/g, '');
      if (input.value.length >= 1) {
        input.value = input.value.charAt(input.value.length - 1);
        if (index < 6) {
          const next = document.getElementById(`pin-${index + 1}`);
          if (next) next.focus();
        }
      }
    }

    function handle2FAPaste(event) {
      event.preventDefault();
      const pasteData = (event.clipboardData || window.clipboardData).getData('text').replace(/\D/g, '');
      if (pasteData) {
        for (let i = 0; i < 6; i++) {
          const cell = document.getElementById(`pin-${i + 1}`);
          if (cell) cell.value = pasteData[i] || '';
        }
        const targetIdx = Math.min(pasteData.length, 6);
        const targetCell = document.getElementById(`pin-${targetIdx}`) || document.getElementById('pin-6');
        if (targetCell) targetCell.focus();
      }
    }

    function handleLoginSubmit(e) {
      e.preventDefault();
      
      const email = document.getElementById('login-email').value;
      const pass = document.getElementById('login-password').value;
      const spinner = document.getElementById('login-spinner');
      const submitBtn = document.getElementById('btn-login-submit');

      // Find user
      const user = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === pass);

      if (!user) {
        addSystemLog('Falla de Credenciales', 'seguridad', `Intento de login fallido para el correo: ${email}`);
        showLoginErrorModal('Credenciales Incorrectas', 'El correo electrónico o la contraseña ingresados no coinciden con ningún usuario o administrador registrado.');
        return;
      }

      if (user.status === 'blocked') {
        addSystemLog('Intento de Acceso Bloqueado', 'seguridad', `Usuario bloqueado intentó iniciar sesión: ${email}`);
        showLoginErrorModal('Cuenta Inhabilitada', 'Esta cuenta de usuario ha sido bloqueada por seguridad. Contacta al administrador del comercio para restablecer tu acceso.');
        return;
      }

      // Start simulated 2FA transition
      submitBtn.disabled = true;
      spinner.classList.remove('hidden');

      setTimeout(() => {
        userPreLoginAttempt = user;
        document.getElementById('login-credentials-form').classList.add('hidden');
        document.getElementById('login-2fa-form').classList.remove('hidden');
        submitBtn.disabled = false;
        spinner.classList.add('hidden');
        
        // Focus first cell
        setTimeout(() => document.getElementById('pin-1').focus(), 50);
        showToast('Código Enviado', 'Código 2FA: 123456 (Simulado)', 'success');
      }, 800);
    }

    function handleLogin2FASubmit(e) {
      e.preventDefault();
      
      const pin = Array.from({length: 6}, (_, i) => document.getElementById(`pin-${i+1}`).value).join('');
      const spinner = document.getElementById('2fa-spinner');
      const submitBtn = document.getElementById('btn-2fa-submit');

      if (pin !== '123456') {
        addSystemLog('Código 2FA Inválido', 'seguridad', `Ingreso de PIN incorrecto para el correo: ${userPreLoginAttempt ? userPreLoginAttempt.email : 'Desconocido'}`);
        showLoginErrorModal('Código de Verificación Incorrecto', 'El código PIN de doble factor ingresado no coincide con el enviado a tu cuenta. Por favor, verifica el código e inténtalo de nuevo.');
        return;
      }

      submitBtn.disabled = true;
      spinner.classList.remove('hidden');

      setTimeout(() => {
        currentUser = userPreLoginAttempt;
        userPreLoginAttempt = null;
        
        // Hide login, show dashboard
        document.getElementById('app-login').classList.add('hidden');
        document.getElementById('app-dashboard').classList.remove('hidden');
        // Show mobile FAB now that user is authenticated
        const fab = document.getElementById('mobile-fab');
        if (fab) fab.classList.remove('hidden');
        
        // Load role RBAC variables
        updateRole(currentUser.role);
        loadNotifications();
        renderNotificationsUI();
        
        // Refresh last active
        currentUser.lastActive = 'Ahora mismo';
        renderUsersTable();
        
        addSystemLog('Inicio de Sesión', 'seguridad', 'Autenticación exitosa y acceso al panel.');
        
        submitBtn.disabled = false;
        spinner.classList.add('hidden');
        document.getElementById('login-2fa-form').reset();
        document.getElementById('login-credentials-form').reset();
        document.getElementById('login-2fa-form').classList.add('hidden');
        document.getElementById('login-credentials-form').classList.remove('hidden');
        
        showToast('Bienvenido', `Sesión iniciada como ${currentUser.name}`);
      }, 1000);
    }

    function cancel2FA() {
      userPreLoginAttempt = null;
      document.getElementById('login-2fa-form').reset();
      document.getElementById('login-2fa-form').classList.add('hidden');
      document.getElementById('login-credentials-form').classList.remove('hidden');
    }

    function resend2FACode() {
      showToast('Código Reenviado', 'Código 2FA: 123456 (Simulado)', 'success');
    }

    function logout() {
      addSystemLog('Cierre de Sesión', 'seguridad', 'Desconexión del panel administrativo voluntaria.');
      currentUser = null;
      loadNotifications();
      renderNotificationsUI();
      document.getElementById('app-dashboard').classList.add('hidden');
      document.getElementById('app-login').classList.remove('hidden');
      // Hide mobile FAB when not logged in
      const fab = document.getElementById('mobile-fab');
      if (fab) fab.classList.add('hidden');
      switchTab('dashboard'); // reset tab state
      showToast('Sesión Cerrada', 'Has salido del panel AuraPay con éxito.');
    }

    // ================= METRICS CALCULATIONS & RENDER =================
    function calculateKPIs(dataset) {
      const data = dataset || transactions;
      const paidTrans = data.filter(t => t.status === 'PAID');

      // Helper: is a PAID transaction a card payment?
      const isCardPayment = t => {
        const mod = (t.payment_modality || '').toLowerCase();
        const type = (t.type || '').toLowerCase();
        return mod.includes('tarjeta') || mod.includes('cuik') || type.includes('tarjeta') || type.includes('cuik');
      };

      // Helper: is a PAID transaction a bank/cash payment?
      const isBankPayment = t => {
        const mod = (t.payment_modality || '').toLowerCase();
        const type = (t.type || '').toLowerCase();
        return mod.includes('banca') || mod.includes('caja') || type.includes('banca') || type.includes('caja') || type.includes('conversacional');
      };

      const getAmtInGTQ = (t) => (t.currency === 'USD') ? t.amount * exchange_rate_usd_to_gtq : t.amount;
      
      // 1. Total Recaudado (PAID)
      const totalPaid = paidTrans.reduce((sum, t) => sum + getAmtInGTQ(t), 0);
      document.getElementById('kpi-net-sales').innerText = formatCurrency(totalPaid);
      document.getElementById('kpi-net-sales-subtext').innerText = `${paidTrans.length} pago${paidTrans.length !== 1 ? 's' : ''} procesado${paidTrans.length !== 1 ? 's' : ''}`;

      // 2. Cobros con Tarjeta
      const cardTrans = paidTrans.filter(isCardPayment);
      const cardTotal = cardTrans.reduce((sum, t) => sum + getAmtInGTQ(t), 0);
      document.getElementById('kpi-card-total').innerText = formatCurrency(cardTotal);
      document.getElementById('kpi-card-count').innerText = `${cardTrans.length} transacción${cardTrans.length !== 1 ? 'es' : ''}`;

      // 3. Cobros Banca Virtual / Caja Rural
      const cashTrans = paidTrans.filter(isBankPayment);
      const cashTotal = cashTrans.reduce((sum, t) => sum + getAmtInGTQ(t), 0);
      document.getElementById('kpi-cash-total').innerText = formatCurrency(cashTotal);
      document.getElementById('kpi-cash-count').innerText = `${cashTrans.length} transacción${cashTrans.length !== 1 ? 'es' : ''}`;

      // 4. Ticket Promedio
      const avgTicket = paidTrans.length > 0 ? totalPaid / paidTrans.length : 0;
      document.getElementById('kpi-avg-ticket').innerText = formatCurrency(avgTicket);
      document.getElementById('kpi-avg-ticket-subtext').innerText = 'por cobro pagado';

      // 5. Producto más vendido (by frequency among PAID)
      const productFreq = {};
      paidTrans.forEach(t => {
        const title = t.product && t.product.title ? t.product.title : 'Sin producto';
        productFreq[title] = (productFreq[title] || 0) + 1;
      });
      let topProduct = '—', topCount = 0;
      Object.entries(productFreq).forEach(([title, count]) => {
        if (count > topCount) { topProduct = title; topCount = count; }
      });
      const topProductEl = document.getElementById('kpi-top-product');
      if (topProductEl) topProductEl.innerText = topProduct;
      const topCountEl = document.getElementById('kpi-top-product-count');
      if (topCountEl) topCountEl.innerText = topCount > 0 ? `${topCount} venta${topCount !== 1 ? 's' : ''}` : '0 ventas';

      // 6. Tasa de Cobro
      const total = data.length;
      const paidCount = paidTrans.length;
      const rate = total > 0 ? ((paidCount / total) * 100).toFixed(1) : '0.0';
      document.getElementById('kpi-conversion-rate').innerText = `${rate}%`;
      document.getElementById('kpi-conversion-subtext').innerText = `${paidCount} de ${total} cobros pagados`;
      document.getElementById('conversion-progress-bar').style.width = `${rate}%`;

      // Update global badges (always from full transaction set)
      const globalPending = transactions.filter(t => t.status === 'PENDING').length;
      const badge = document.getElementById('badge-pending-count');
      if (badge) {
        if (globalPending > 0) { badge.innerText = globalPending; badge.classList.remove('hidden'); }
        else { badge.classList.add('hidden'); }
      }
      const globalPaid = transactions.filter(t => t.status === 'PAID').length;
      const paidBadge = document.getElementById('badge-paid-count');
      if (paidBadge) {
        if (globalPaid > 0) { paidBadge.innerText = globalPaid; paidBadge.classList.remove('hidden'); }
        else { paidBadge.classList.add('hidden'); }
      }
    }

    function renderTable() {
      const tbody = document.getElementById('transaction-table-body');
      tbody.innerHTML = '';

      const filtered = transactions.filter(t => {
        const matchSearch = t.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            t.transaction_id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            t.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            t.merchant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            t.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            t.product.title.toLowerCase().includes(searchQuery.toLowerCase());
        
        const matchStatus = statusFilter === 'all' || t.status === statusFilter;

        // Date range filter
        const itemDateStr = t.date.substring(0, 10);
        const startDate = document.getElementById('filter-start-date').value;
        const endDate = document.getElementById('filter-end-date').value;
        let matchDate = true;
        if (startDate) matchDate = matchDate && (itemDateStr >= startDate);
        if (endDate) matchDate = matchDate && (itemDateStr <= endDate);

        return matchSearch && matchStatus && matchDate;
      });

      calculateKPIs(filtered);

      document.getElementById('table-total-count').innerText = `Mostrando ${filtered.length} de ${transactions.length} transacciones`;

      if (filtered.length === 0) {
        tbody.innerHTML = `
          <tr>
            <td colspan="6" class="px-6 py-8 text-center text-gray-400 font-medium text-xs">
              No se encontraron transacciones.
            </td>
          </tr>
        `;
        return;
      }

      filtered.forEach(t => {
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-gray-50/70 transition-colors border-b border-gray-100 cursor-pointer';
        tr.onclick = () => openDrawer(t);

        let badgeStyle = '';
        if (t.status === 'PAID') {
          badgeStyle = 'bg-amber-50 text-aura-goldText border-amber-200';
        } else if (t.status === 'PENDING') {
          badgeStyle = 'bg-slate-50 text-slate-600 border-slate-200';
        } else if (t.status === 'CANCELLED') {
          badgeStyle = 'bg-red-50 text-red-600 border-red-200';
        } else {
          badgeStyle = 'bg-gray-100 text-gray-400 border-gray-200 line-through';
        }

        let typeStyle = '';
        if (t.type === 'Conversacional') {
          typeStyle = 'bg-slate-100 text-slate-700 border-slate-200/50';
        } else if (t.type === 'Aura Virtual' || t.type.includes('Virtual') || t.type.includes('AuraPay')) {
          typeStyle = 'bg-amber-50 text-aura-goldText border-amber-200/50';
        } else {
          typeStyle = 'bg-slate-100 text-slate-700 border-slate-200/50';
        }

        tr.innerHTML = `
          <td class="px-6 py-4 font-semibold font-mono text-xs text-gray-900 whitespace-nowrap">${t.transaction_id}</td>
          <td class="px-6 py-4 text-xs text-gray-400 font-medium whitespace-nowrap">${t.date}</td>
          <td class="px-6 py-4 font-semibold text-gray-800 text-xs whitespace-nowrap">${t.client}</td>
          <td class="px-6 py-4 whitespace-nowrap">
            <span class="px-2.5 py-0.5 rounded border text-[10px] font-semibold ${typeStyle}">${t.type}</span>
          </td>
          <td class="px-6 py-4 text-right font-semibold text-gray-900 text-xs whitespace-nowrap">${formatCurrency(t.amount, t.currency)}</td>
          <td class="px-6 py-4 text-center whitespace-nowrap">
            <span class="px-2.5 py-0.5 rounded-full text-[10px] font-semibold border ${badgeStyle}">${t.status === 'PAID' ? 'Pagado' : t.status === 'PENDING' ? 'Pendiente' : t.status === 'CANCELLED' ? 'Cancelado' : 'Expirado'}</span>
          </td>
        `;
        tbody.appendChild(tr);
      });

      // Render the paid transactions report table
      renderTransactionsReport();
    }

    function renderTransactionsReport() {
      const tbody = document.getElementById('transactions-report-table-body');
      if (!tbody) return;
      tbody.innerHTML = '';

      const startDate = document.getElementById('report-start-date').value;
      const endDate = document.getElementById('report-end-date').value;

      const paidTxs = transactions.filter(t => {
        if (t.status !== 'PAID') return false;
        
        const pDate = t.payment_date || t.date;
        const itemDateStr = pDate.substring(0, 10);
        let matchDate = true;
        if (startDate) matchDate = matchDate && (itemDateStr >= startDate);
        if (endDate) matchDate = matchDate && (itemDateStr <= endDate);
        return matchDate;
      });
      
      const countEl = document.getElementById('transactions-report-count');
      if (countEl) {
        countEl.innerText = `Mostrando ${paidTxs.length} transacciones`;
      }

      if (paidTxs.length === 0) {
        tbody.innerHTML = `
          <tr>
            <td colspan="7" class="px-6 py-8 text-center text-gray-400 font-medium text-xs">
              No se han liquidado transacciones de pago todavía.
            </td>
          </tr>
        `;
        return;
      }

      paidTxs.forEach(t => {
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-gray-50/70 transition-colors border-b border-gray-100';

        const auth = t.auth_number || 'N/A';
        const audit = t.audit_number || 'N/A';
        const ref = t.reference_number || 'N/A';
        const pDate = t.payment_date || t.date;

        tr.innerHTML = `
          <td class="px-6 py-4 font-semibold font-mono text-xs text-gray-900 whitespace-nowrap">${auth}</td>
          <td class="px-6 py-4 font-semibold font-mono text-xs text-gray-900 whitespace-nowrap">${audit}</td>
          <td class="px-6 py-4 text-xs font-mono text-gray-500 whitespace-nowrap">${ref}</td>
          <td class="px-6 py-4 whitespace-nowrap">
            <button onclick="openDrawerFromReport('${t.transaction_id}')" class="text-xs text-aura-primary font-bold hover:underline font-mono focus:outline-none">${t.transaction_id}</button>
          </td>
          <td class="px-6 py-4 font-semibold text-gray-800 text-xs whitespace-nowrap">${t.client}</td>
          <td class="px-6 py-4 text-right font-semibold text-gray-900 text-xs whitespace-nowrap">${formatCurrency(t.amount, t.currency)}</td>
          <td class="px-6 py-4 text-xs text-gray-400 font-medium whitespace-nowrap">${pDate}</td>
        `;
        tbody.appendChild(tr);
      });
    }

    function openDrawerFromReport(txId) {
      const t = transactions.find(txn => txn.transaction_id === txId);
      if (t) {
        openDrawer(t);
      }
    }

    function exportPaidTransactionsExcel() {
      const startDate = document.getElementById('report-start-date').value;
      const endDate = document.getElementById('report-end-date').value;

      const paidTxs = transactions.filter(t => {
        if (t.status !== 'PAID') return false;
        
        const pDate = t.payment_date || t.date;
        const itemDateStr = pDate.substring(0, 10);
        let matchDate = true;
        if (startDate) matchDate = matchDate && (itemDateStr >= startDate);
        if (endDate) matchDate = matchDate && (itemDateStr <= endDate);
        return matchDate;
      });

      if (paidTxs.length === 0) {
        showToast('Reporte Vacío', 'No hay transacciones pagadas en el rango de fechas para exportar.', 'warning');
        return;
      }

      // Create CSV content compatible with Excel
      let csvContent = "\uFEFFsep=;\r\n"; // Byte Order Mark + Delimiter specifier for Excel
      csvContent += "Código Autorización;Código Auditoría;Referencia de Pago;Enlace de Origen;Cliente;Monto;Fecha de Pago;Requiere Factura;NIT;Razón Social;Número de Orden;Correo de Contacto;Modalidad de Pago\r\n";
      
      paidTxs.forEach(t => {
        const auth = t.auth_number || 'N/A';
        const audit = t.audit_number || 'N/A';
        const ref = t.reference_number || 'N/A';
        const pDate = t.payment_date || t.date;
        const amountFormatted = t.amount.toFixed(2);
        
        const billing = t.billing || {};
        const reqFactura = billing.need_invoice ? 'Sí' : 'No';
        const nit = billing.nit || 'N/A';
        const razonSocial = billing.client_name || 'N/A';
        const orderNumber = billing.order_number || 'N/A';
        const contactEmail = billing.contact_email || 'N/A';
        const modality = t.payment_modality || 'Contado';

        csvContent += `"${auth}";"${audit}";"${ref}";"${t.transaction_id}";"${t.client}";"${amountFormatted}";"${pDate}";"${reqFactura}";"${nit}";"${razonSocial}";"${orderNumber}";"${contactEmail}";"${modality}"\r\n`;
      });

      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', `reporte_transacciones_aurapay_${formatDate(new Date()).split(' ')[0]}.csv`);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      showToast('Exportación Exitosa', 'El reporte consolidado se descargó en formato compatible con Excel.', 'success');
      addSystemLog('Exportar Reporte', 'transaccion', 'Se descargó el reporte consolidado de transacciones exitosas en formato CSV/Excel.');
    }

    function applyDateFilters() {
      renderTable();
    }

    function clearDateFilter() {
      document.getElementById('filter-start-date').value = '';
      document.getElementById('filter-end-date').value = '';
      renderTable();
    }

    function clearReportDateFilter() {
      document.getElementById('report-start-date').value = '';
      document.getElementById('report-end-date').value = '';
      renderTransactionsReport();
    }

    // ================= PRODUCTS CATALOG LOGIC =================
    let currentProductImageBase64 = null;

    function updateCalculatedProductPrice() {
      const baseAmtInput = document.getElementById('product-base-amount');
      const installmentsSelect = document.getElementById('product-max-installments');
      const listPriceInput = document.getElementById('product-list-price');
      if (!baseAmtInput || !installmentsSelect || !listPriceInput) return;

      const baseAmt = parseFloat(baseAmtInput.value) || 0;
      const installments = parseInt(installmentsSelect.value) || 1;

      const rates = {
        1: 0.0450,
        2: 0.0525,
        3: 0.0575,
        6: 0.0700,
        10: 0.0725,
        12: 0.0800
      };

      const rate = rates[installments] || 0.0450;
      let calculatedPrice = 0;
      if (baseAmt > 0) {
        const fixed_fee_local = gateway_fee_usd * exchange_rate_usd_to_gtq;
        calculatedPrice = (baseAmt + fixed_fee_local) / (1 - rate);
      }

      listPriceInput.value = calculatedPrice > 0 ? calculatedPrice.toFixed(2) : '';
    }

    function renderProductsCatalog() {
      const grid = document.getElementById('products-catalog-grid');
      const emptyState = document.getElementById('products-catalog-empty');
      if (!grid || !emptyState) return;

      grid.innerHTML = '';

      if (productsCatalog.length === 0) {
        grid.classList.add('hidden');
        emptyState.classList.remove('hidden');
        return;
      }

      grid.classList.remove('hidden');
      emptyState.classList.add('hidden');

      productsCatalog.forEach(p => {
        const card = document.createElement('div');
        card.className = 'bg-white border border-gray-200 rounded-xl shadow-xs overflow-hidden flex flex-col justify-between transition-all hover:shadow-md';

        // Image container
        let imgHtml = '';
        if (p.image) {
          imgHtml = `<img src="${p.image}" class="w-full h-full object-cover" alt="${p.name}">`;
        } else {
          imgHtml = `
            <div class="w-full h-full bg-gradient-to-br from-amber-50/50 to-aura-primary/5 flex items-center justify-center text-aura-primary">
              <svg class="w-8 h-8 opacity-75" fill="none" stroke="currentColor" stroke-width="1.2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
              </svg>
            </div>
          `;
        }

        let stockLabel = '';
        if (p.stock !== null && p.stock !== undefined) {
          const mainStock = p.stock > 0 ? `<span class="bg-amber-50 text-aura-goldText text-[9.5px] px-2 py-0.5 rounded font-bold border border-amber-200/50" title="Inventario disponible">${p.stock} en stock</span>` : `<span class="bg-slate-50 text-slate-550 text-[9.5px] px-2 py-0.5 rounded font-bold border border-slate-200">Agotado</span>`;
          const reservedStock = (p.reserved && p.reserved > 0) ? `<span class="bg-gray-100 text-gray-600 text-[9.5px] px-2 py-0.5 rounded font-bold border border-gray-200" title="Apartados en links pendientes">${p.reserved} apartados</span>` : '';
          stockLabel = `<div class="flex items-center gap-1">${mainStock}${reservedStock}</div>`;
        } else {
          stockLabel = '<span class="bg-gray-50 text-gray-550 text-[9.5px] px-2 py-0.5 rounded font-bold border border-gray-150">Servicio</span>';
        }

        const descText = p.description || 'Sin descripción detallada disponible.';
        const refPill = p.ref ? `<span class="bg-gray-100 text-gray-600 text-[9.5px] px-1.5 py-0.2 rounded font-mono border border-gray-200">${p.ref}</span>` : '';

        card.innerHTML = `
          <div class="h-32 w-full border-b border-gray-150 overflow-hidden relative bg-gray-50">
            ${imgHtml}
            <div class="absolute top-2.5 right-2.5">
              ${stockLabel}
            </div>
          </div>
          <div class="p-4 flex-1 flex flex-col justify-between space-y-3">
            <div class="space-y-1.5">
              <div class="flex items-start justify-between gap-2">
                <h3 class="font-bold text-xs text-gray-950 line-clamp-1 flex-1" title="${p.name}">${p.name}</h3>
                ${refPill}
              </div>
              <p class="text-[10.5px] text-gray-550 leading-relaxed line-clamp-2">${descText}</p>
            </div>
            <div class="flex items-center justify-between pt-2.5 border-t border-gray-100">
              <span class="text-xs font-extrabold text-gray-900">${formatCurrency(p.price)}</span>
              <div class="flex gap-1.5">
                ${(currentUser && (currentUser.role === 'admin' || currentUser.role === 'operativo')) ? `
                  <button onclick="openProductModal('${p.id}')" class="p-1 text-gray-500 hover:text-aura-primary hover:bg-gray-50 rounded transition-all focus:outline-none" title="Editar Producto">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.83 20.013a4.5 4.5 0 01-1.697 1.097l-4.503 1.225 1.225-4.503a4.5 4.5 0 011.097-1.697L16.863 4.487zm0 0L19.5 7.125" /></svg>
                  </button>
                  <button onclick="deleteProduct('${p.id}')" class="p-1 text-gray-400 hover:text-red-650 hover:bg-red-50 rounded transition-all focus:outline-none" title="Eliminar Producto">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>
                  </button>
                ` : ''}
              </div>
            </div>
          </div>
        `;
        grid.appendChild(card);
      });
    }

    function exportProductsExcel() {
      if (productsCatalog.length === 0) {
        showToast('Catálogo Vacío', 'No hay productos para exportar.', 'warning');
        return;
      }
      let csvContent = "\uFEFFsep=;\nNombre;SKU;Precio;Stock;Descripción\n";
      productsCatalog.forEach(p => {
        const stockVal = p.stock !== null && p.stock !== undefined ? p.stock : 'Servicio';
        const desc = (p.description || '').replace(/[\r\n]+/g, ' ').replace(/"/g, '""');
        csvContent += `"${p.name}";"${p.ref || ''}";${p.price};"${stockVal}";"${desc}"\n`;
      });
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.setAttribute("href", url);
      link.setAttribute("download", `productos_aurapay_${new Date().toISOString().slice(0,10)}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      showToast('Productos Exportados', 'Catálogo de productos descargado en formato CSV/Excel.');
      addSystemLog('Exportar Catálogo', 'transaccion', `Se exportaron ${productsCatalog.length} productos del catálogo.`);
    }

    function triggerProductCSVImport() {
      document.getElementById('product-csv-file-input').click();
    }

    function handleProductCSVImport(event) {
      const file = event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = function(e) {
        const text = e.target.result;
        try {
          const lines = text.split(/\r?\n/);
          if (lines.length < 2) {
            showToast('Archivo Vacío', 'El archivo CSV seleccionado no contiene datos.', 'warning');
            return;
          }

          // Detect separator (semicolon or comma)
          let sep = ';';
          let startIndex = 0;
          const firstLine = lines[0];
          if (firstLine.includes('sep=')) {
            const match = firstLine.match(/sep=(.)/);
            if (match) sep = match[1];
            startIndex = 1;
          }

          const headers = lines[startIndex].split(sep).map(h => h.trim().replace(/^"|"$/g, '').toLowerCase());
          
          const nameIdx = headers.findIndex(h => h.includes('nom') || h.includes('title') || h.includes('name'));
          const refIdx = headers.findIndex(h => h.includes('sku') || h.includes('ref') || h.includes('cod'));
          const priceIdx = headers.findIndex(h => h.includes('prec') || h.includes('price') || h.includes('mont'));
          const stockIdx = headers.findIndex(h => h.includes('stock') || h.includes('cant') || h.includes('inv'));
          const descIdx = headers.findIndex(h => h.includes('desc'));

          if (nameIdx === -1 || priceIdx === -1) {
            showToast('Formato Inválido', 'El CSV debe contener las columnas "Nombre" y "Precio". Columna SKU, Stock y Descripción opcionales.', 'error');
            return;
          }

          let addedCount = 0;
          for (let i = startIndex + 1; i < lines.length; i++) {
            const line = lines[i].trim();
            if (!line) continue;

            // Split line respecting quotes
            const cells = [];
            let currentCell = '';
            let inQuotes = false;
            for (let j = 0; j < line.length; j++) {
              const char = line[j];
              if (char === '"') {
                inQuotes = !inQuotes;
              } else if (char === sep && !inQuotes) {
                cells.push(currentCell.trim().replace(/^"|"$/g, ''));
                currentCell = '';
              } else {
                currentCell += char;
              }
            }
            cells.push(currentCell.trim().replace(/^"|"$/g, ''));

            if (cells.length <= Math.max(nameIdx, priceIdx)) continue;

            const name = cells[nameIdx];
            const price = parseFloat(cells[priceIdx].replace(/[^\d.]/g, '')) || 0;
            if (!name || price <= 0) continue;

            const ref = refIdx !== -1 ? cells[refIdx] : `sku-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
            
            let stock = null;
            if (stockIdx !== -1 && cells[stockIdx]) {
              const stockText = cells[stockIdx].toLowerCase();
              if (stockText !== 'servicio' && stockText !== '') {
                stock = parseInt(stockText) || 0;
              }
            }
            const description = descIdx !== -1 ? cells[descIdx] : '';

            const newProd = {
              id: 'prod-' + Date.now() + '-' + Math.random().toString(36).substring(2, 7),
              name: name,
              ref: ref,
              price: price,
              stock: stock,
              description: description,
              image: null
            };

            productsCatalog.push(newProd);
            addedCount++;
          }

          if (addedCount > 0) {
            localStorage.setItem('aurapay_products', JSON.stringify(productsCatalog));
            localStorage.setItem('aurapay_products', JSON.stringify(productsCatalog));
            renderProductsCatalog();
            populateLinkProductDropdown();
            showToast('Productos Importados', `Se agregaron ${addedCount} productos con éxito.`, 'success');
            addSystemLog('Carga Masiva Productos', 'transaccion', `Se importaron ${addedCount} productos mediante carga masiva CSV.`);
          } else {
            showToast('Sin Cambios', 'No se encontraron registros de producto válidos en el archivo.', 'warning');
          }
        } catch (err) {
          console.error(err);
          showToast('Error de Lectura', 'Hubo un problema al procesar el archivo CSV.', 'error');
        }
      };
      reader.readAsText(file);
      event.target.value = '';
    }

    function openProductModal(prodId = null) {
      document.getElementById('create-product-form').reset();
      clearProductImage();

      const modal = document.getElementById('modal-product-backdrop');
      const container = document.getElementById('product-modal-content');
      const titleEl = document.getElementById('product-modal-title');
      const editIdInput = document.getElementById('edit-product-id');

      if (prodId) {
        const prod = productsCatalog.find(p => p.id === prodId);
        if (prod) {
          titleEl.innerText = 'Editar Producto';
          editIdInput.value = prod.id;
          document.getElementById('product-name').value = prod.name;
          document.getElementById('product-ref').value = prod.ref || '';
          document.getElementById('product-stock').value = prod.stock !== null && prod.stock !== undefined ? prod.stock : '';
          document.getElementById('product-base-amount').value = prod.base_amount || prod.price;
          document.getElementById('product-max-installments').value = prod.max_installments || 1;
          updateCalculatedProductPrice();
          document.getElementById('product-desc').value = prod.description || '';

          if (prod.image) {
            currentProductImageBase64 = prod.image;
            if (prod.image.startsWith('http://') || prod.image.startsWith('https://')) {
              switchImgTab('url');
              const urlInput = document.getElementById('product-image-url');
              if (urlInput) urlInput.value = prod.image;
              
              const previewContainer = document.getElementById('img-url-preview-state');
              const previewImgDiv = document.getElementById('product-img-preview-url');
              if (previewImgDiv && previewContainer) {
                previewImgDiv.innerHTML = `<img src="${prod.image}" class="w-full h-full object-cover">`;
                previewContainer.classList.remove('hidden');
              }
            } else {
              switchImgTab('file');
              document.getElementById('img-file-empty-state').classList.add('hidden');
              const filledState = document.getElementById('img-file-filled-state');
              filledState.classList.remove('hidden');
              
              const filenameLabel = document.getElementById('product-image-filename');
              if (filenameLabel) filenameLabel.innerText = 'Imagen cargada';
              
              const previewImgDiv = document.getElementById('product-img-preview-file');
              if (previewImgDiv) previewImgDiv.innerHTML = `<img src="${prod.image}" class="w-full h-full object-cover">`;
            }
          }
        }
      } else {
        titleEl.innerText = 'Registrar Producto en Catálogo';
        editIdInput.value = '';
      }

      modal.classList.remove('hidden');
      setTimeout(() => {
        modal.classList.remove('opacity-0');
        modal.classList.add('opacity-100');
        container.classList.remove('scale-95');
        container.classList.add('scale-100');
      }, 10);
    }

    function closeProductModal() {
      const modal = document.getElementById('modal-product-backdrop');
      const container = document.getElementById('product-modal-content');

      modal.classList.remove('opacity-100');
      modal.classList.add('opacity-0');
      container.classList.remove('scale-100');
      container.classList.add('scale-95');
      setTimeout(() => {
        modal.classList.add('hidden');
      }, 300);
    }

    function switchImgTab(tab) {
      const filePanel = document.getElementById('img-panel-file');
      const urlPanel  = document.getElementById('img-panel-url');
      const fileTab   = document.getElementById('img-tab-file');
      const urlTab    = document.getElementById('img-tab-url');
      const activeClass   = ['bg-aura-primary', 'text-white'];
      const inactiveClass = ['bg-gray-100', 'text-gray-500', 'hover:bg-gray-200'];

      if (tab === 'file') {
        filePanel.classList.remove('hidden');
        urlPanel.classList.add('hidden');
        fileTab.classList.add(...activeClass);    fileTab.classList.remove(...inactiveClass);
        urlTab.classList.remove(...activeClass);  urlTab.classList.add(...inactiveClass);
      } else {
        urlPanel.classList.remove('hidden');
        filePanel.classList.add('hidden');
        urlTab.classList.add(...activeClass);     urlTab.classList.remove(...inactiveClass);
        fileTab.classList.remove(...activeClass); fileTab.classList.add(...inactiveClass);
      }
    }

    function previewProductImageUrl(url) {
      const previewContainer = document.getElementById('img-url-preview-state');
      const previewImgDiv = document.getElementById('product-img-preview-url');
      if (url && url.trim()) {
        const img = new Image();
        img.onload = function() {
          currentProductImageBase64 = url.trim();
          previewImgDiv.innerHTML = `<img src="${url.trim()}" class="w-full h-full object-cover">`;
          previewContainer.classList.remove('hidden');
        };
        img.onerror = function() {
          currentProductImageBase64 = null;
          previewImgDiv.innerHTML = '<span class="text-red-400 text-[10px] font-bold text-center">Inválida</span>';
          previewContainer.classList.remove('hidden');
        };
        img.src = url.trim();
      } else {
        currentProductImageBase64 = null;
        previewContainer.classList.add('hidden');
      }
    }

    function previewProductImage(event) {
      const file = event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = function(e) {
        currentProductImageBase64 = e.target.result;
        document.getElementById('img-file-empty-state').classList.add('hidden');
        const filledState = document.getElementById('img-file-filled-state');
        filledState.classList.remove('hidden');
        const filenameLabel = document.getElementById('product-image-filename');
        filenameLabel.innerText = file.name || 'Imagen seleccionada';
        const previewImgDiv = document.getElementById('product-img-preview-file');
        previewImgDiv.innerHTML = `<img src="${currentProductImageBase64}" class="w-full h-full object-cover">`;
      };
      reader.readAsDataURL(file);
    }

    function clearProductImage() {
      document.getElementById('product-image-file').value = '';
      const urlInput = document.getElementById('product-image-url');
      if (urlInput) urlInput.value = '';
      currentProductImageBase64 = null;
      document.getElementById('img-file-empty-state').classList.remove('hidden');
      document.getElementById('img-file-filled-state').classList.add('hidden');
      document.getElementById('img-url-preview-state').classList.add('hidden');
    }

    function handleSaveProduct(e) {
      e.preventDefault();

      const name = document.getElementById('product-name').value.trim();
      const ref = document.getElementById('product-ref').value.trim() || null;
      const stockVal = document.getElementById('product-stock').value;
      const stock = stockVal !== '' ? parseInt(stockVal) : null;
      const baseAmount = parseFloat(document.getElementById('product-base-amount').value);
      const maxInstallments = parseInt(document.getElementById('product-max-installments').value);
      const calculatedListPrice = parseFloat(document.getElementById('product-list-price').value);

      const rates = {
        1: 4.50,
        2: 5.25,
        3: 5.75,
        6: 7.00,
        10: 7.25,
        12: 8.00
      };
      const feePercentageApplied = rates[maxInstallments] || 4.50;
      const snapshotFixedFeeLocal = parseFloat((gateway_fee_usd * exchange_rate_usd_to_gtq).toFixed(4));

      const description = document.getElementById('product-desc').value.trim() || null;
      const editId = document.getElementById('edit-product-id').value;

      if (editId) {
        // Edit mode
        const index = productsCatalog.findIndex(p => p.id === editId);
        if (index !== -1) {
          productsCatalog[index] = {
            id: editId,
            name,
            ref,
            stock,
            base_amount: baseAmount,
            max_installments: maxInstallments,
            fee_percentage_applied: feePercentageApplied,
            gateway_fee_usd: gateway_fee_usd,
            exchange_rate_usd_to_gtq: exchange_rate_usd_to_gtq,
            fixed_fee_local: snapshotFixedFeeLocal,
            price: calculatedListPrice,
            description,
            image: currentProductImageBase64
          };
          showToast('Catálogo Actualizado', `El producto "${name}" fue modificado.`, 'success');
        }
      } else {
        // Create mode
        const newProduct = {
          id: 'prod_' + Math.random().toString(36).substr(2, 9),
          name,
          ref,
          stock,
          base_amount: baseAmount,
          max_installments: maxInstallments,
          fee_percentage_applied: feePercentageApplied,
          gateway_fee_usd: gateway_fee_usd,
          exchange_rate_usd_to_gtq: exchange_rate_usd_to_gtq,
          fixed_fee_local: snapshotFixedFeeLocal,
          price: calculatedListPrice,
          description,
          image: currentProductImageBase64
        };
        productsCatalog.push(newProduct);
        showToast('Producto Registrado', `"${name}" fue añadido al catálogo.`, 'success');
      }

      // Sync and render
      try {
        localStorage.setItem('aurapay_products', JSON.stringify(productsCatalog));
        localStorage.setItem('aurapay_products', JSON.stringify(productsCatalog));
      } catch (err) {
        console.error(err);
      }
      
      renderProductsCatalog();
      populateLinkProductDropdown();
      closeProductModal();
    }

    function deleteProduct(prodId) {
      const prod = productsCatalog.find(p => p.id === prodId);
      if (!prod) return;

      showCustomConfirm(
        'Eliminar Producto',
        `¿Estás seguro de que deseas eliminar "${prod.name}" del catálogo?`,
        () => {
          productsCatalog = productsCatalog.filter(p => p.id !== prodId);
          try {
            localStorage.setItem('aurapay_products', JSON.stringify(productsCatalog));
            localStorage.setItem('aurapay_products', JSON.stringify(productsCatalog));
          } catch (err) {
            console.error(err);
          }
          
          renderProductsCatalog();
          populateLinkProductDropdown();
          showToast('Producto Eliminado', 'El artículo fue removido del catálogo.', 'warning');
        }
      );
    }

    // Temporary array to hold selected products for the link being created
    let selectedProductsForLink = [];

    function populateLinkProductDropdown() {
      const select = document.getElementById('link-product-select');
      if (!select) return;

      select.innerHTML = '<option value="" disabled selected>-- Elegir producto... --</option>';
      productsCatalog.forEach(p => {
        const option = document.createElement('option');
        option.value = p.id;
        const displayName = p.name.length > 45 ? p.name.substring(0, 42) + '...' : p.name;
        option.textContent = `${displayName} - Q ${p.price.toFixed(2)}`;
        select.appendChild(option);
      });
    }

    function onLinkProductSelect(prodId) {
      if (!prodId) return;

      const prod = productsCatalog.find(p => p.id === prodId);
      if (!prod) return;

      // Check if already selected
      const existing = selectedProductsForLink.find(item => item.id === prodId);
      if (existing) {
        existing.quantity++;
      } else {
        selectedProductsForLink.push({
          id: prod.id,
          name: prod.name,
          price: prod.price,
          base_amount: prod.base_amount || prod.price,
          max_installments: prod.max_installments || 1,
          quantity: 1,
          image: prod.image
        });
      }

      // Reset select element back to default
      const select = document.getElementById('link-product-select');
      if (select) select.value = '';

      renderSelectedProductsInLink();
    }

    function removeProductFromLinkSelection(prodId) {
      selectedProductsForLink = selectedProductsForLink.filter(item => item.id !== prodId);
      renderSelectedProductsInLink();
    }

    function updateProductQuantityInLink(prodId, newQty) {
      const item = selectedProductsForLink.find(item => item.id === prodId);
      if (!item) return;

      if (newQty <= 0) {
        removeProductFromLinkSelection(prodId);
      } else {
        item.quantity = newQty;
        renderSelectedProductsInLink();
      }
    }

    function clearLinkProductSelection() {
      selectedProductsForLink = [];
      renderSelectedProductsInLink();
    }

    function renderSelectedProductsInLink() {
      const listContainer = document.getElementById('link-selected-products-list');
      const amountInput = document.getElementById('link-amount');
      const titleInput = document.getElementById('link-product-title');
      const installmentsSelect = document.getElementById('link-max-installments');
      const listPriceInput = document.getElementById('link-list-price');

      if (!listContainer) return;

      if (selectedProductsForLink.length === 0) {
        listContainer.innerHTML = '<div class="text-[10px] text-gray-400 text-center py-2" id="link-products-empty-msg">Ningún producto seleccionado (Enlace normal)</div>';
        
        // Restore editable state
        amountInput.removeAttribute('readonly');
        amountInput.classList.remove('bg-gray-50', 'text-gray-500');
        titleInput.removeAttribute('readonly');
        titleInput.classList.remove('bg-gray-50', 'text-gray-500');
        
        if (installmentsSelect) {
          installmentsSelect.removeAttribute('disabled');
          document.getElementById('link-installments-container').classList.remove('bg-gray-55', 'text-gray-400');
        }

        // Reset values if they were calculated
        amountInput.value = '';
        titleInput.value = '';
        if (listPriceInput) listPriceInput.value = '';
        return;
      }

      listContainer.innerHTML = '';
      
      let totalBaseAmount = 0;
      let totalListPrice = 0;
      let minInstallments = 12;
      let titles = [];

      selectedProductsForLink.forEach(item => {
        const subtotalList = item.price * item.quantity;
        const subtotalBase = item.base_amount * item.quantity;
        
        totalListPrice += subtotalList;
        totalBaseAmount += subtotalBase;
        
        if (item.max_installments && item.max_installments < minInstallments) {
          minInstallments = item.max_installments;
        }

        titles.push(`${item.quantity}x ${item.name}`);

        const row = document.createElement('div');
        row.className = 'flex items-center justify-between py-1.5 text-xs text-gray-700 gap-2';
        row.innerHTML = `
          <div class="min-w-0 flex-1">
            <p class="font-semibold text-gray-900 truncate text-[11px]">${item.name}</p>
            <p class="text-[9px] text-gray-400">Q ${item.price.toFixed(2)} c/u</p>
          </div>
          <div class="flex items-center gap-1.5">
            <button type="button" onclick="updateProductQuantityInLink('${item.id}', ${item.quantity - 1})" class="w-5 h-5 bg-gray-100 hover:bg-gray-200 rounded flex items-center justify-center text-gray-700 font-bold focus:outline-none">-</button>
            <span class="font-bold text-[11px] w-4 text-center">${item.quantity}</span>
            <button type="button" onclick="updateProductQuantityInLink('${item.id}', ${item.quantity + 1})" class="w-5 h-5 bg-gray-100 hover:bg-gray-200 rounded flex items-center justify-center text-gray-700 font-bold focus:outline-none">+</button>
          </div>
          <div class="text-right w-16 flex-shrink-0 font-semibold text-[11px]">
            Q ${subtotalList.toFixed(2)}
          </div>
          <button type="button" onclick="removeProductFromLinkSelection('${item.id}')" class="text-red-650 hover:text-red-800 p-0.5 focus:outline-none">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        `;
        listContainer.appendChild(row);
      });

      // Update Form Inputs to ReadOnly and calculate totals
      amountInput.setAttribute('readonly', 'true');
      amountInput.classList.add('bg-gray-50', 'text-gray-500');
      amountInput.value = totalBaseAmount.toFixed(2);

      titleInput.setAttribute('readonly', 'true');
      titleInput.classList.add('bg-gray-50', 'text-gray-500');
      titleInput.value = titles.join(', ');

      if (installmentsSelect) {
        installmentsSelect.value = minInstallments;
        installmentsSelect.setAttribute('disabled', 'true');
        document.getElementById('link-installments-container').classList.add('bg-gray-55', 'text-gray-400');
      }

      if (listPriceInput) {
        listPriceInput.value = totalListPrice.toFixed(2);
      }
    }

    // ================= USER MANAGEMENT PANEL LOGIC =================
    function renderUsersTable() {
      const tbody = document.getElementById('users-table-body');
      tbody.innerHTML = '';

      users.forEach(u => {
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-gray-50/70 transition-colors border-b border-gray-100';

        // Avatar letters and role badge style
        const initials = u.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
        let roleStyle = 'bg-gray-100 text-gray-800';
        let avatarColor = 'bg-gray-200 text-gray-600';

        if (u.role === 'admin') {
          roleStyle = 'bg-amber-50 text-aura-goldText border-amber-200/50';
          avatarColor = 'bg-aura-primary/10 text-aura-primary';
        } else if (u.role === 'cajero') {
          roleStyle = 'bg-slate-100 text-slate-700 border-slate-200/50';
          avatarColor = 'bg-aura-gold/10 text-aura-gold';
        } else if (u.role === 'operativo') {
          roleStyle = 'bg-slate-100 text-slate-700 border-slate-200/50';
          avatarColor = 'bg-slate-100 text-slate-700';
        } else if (u.role === 'auditor') {
          roleStyle = 'bg-slate-50 text-slate-700 border-slate-200/50';
          avatarColor = 'bg-slate-100 text-slate-700';
        }

        const isSelf = currentUser && currentUser.id === u.id;

        let displayRole = u.role;
        if (u.role === 'cajero') displayRole = 'Vendedor / Cajero';
        else if (u.role === 'admin') displayRole = 'Administrador';
        else if (u.role === 'operativo') displayRole = 'Operativo';
        else if (u.role === 'auditor') displayRole = 'Auditor';

        tbody.appendChild(tr);
        tr.innerHTML = `
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-md flex items-center justify-center font-bold text-xs ${avatarColor}">
                ${initials}
              </div>
              <div>
                <div class="font-semibold text-xs text-gray-900 flex items-center gap-1.5">
                  <span>${u.name}</span>
                  ${isSelf ? '<span class="text-[8px] bg-aura-primary/10 text-aura-primary px-1 rounded font-bold uppercase">Tú</span>' : ''}
                </div>
                <div class="text-[10px] text-gray-400 font-medium">${u.email}</div>
              </div>
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <span class="px-2.5 py-0.5 rounded border text-[10px] font-semibold ${roleStyle}">${displayRole}</span>
          </td>
          <td class="px-6 py-4 text-center whitespace-nowrap">
            <span class="px-2.5 py-0.5 rounded-full text-[10px] font-semibold border ${u.status === 'active' ? 'bg-amber-50 text-aura-goldText border-amber-200' : 'bg-slate-50 text-slate-700 border-slate-200'}">
              ${u.status === 'active' ? 'Activo' : 'Bloqueado'}
            </span>
          </td>
          <td class="px-6 py-4 text-xs text-gray-400 font-medium whitespace-nowrap">${u.lastActive}</td>
          <td class="px-6 py-4 text-right space-x-2 whitespace-nowrap">
            <button onclick="openUserModal('${u.id}')" class="text-xs text-aura-primary font-bold hover:underline focus:outline-none">Editar</button>
            <button onclick="toggleUserLock('${u.id}')" class="text-xs ${u.status === 'active' ? 'text-slate-500 hover:text-slate-700' : 'text-aura-primary hover:text-aura-primaryHover'} font-bold hover:underline focus:outline-none" ${isSelf ? 'disabled class="opacity-30 cursor-not-allowed"' : ''}>
              ${u.status === 'active' ? 'Bloquear' : 'Desbloquear'}
            </button>
          </td>
        `;
      });
    }

    // Password robustez evaluation
    function evaluatePasswordStrength(password) {
      let score = 0;
      if (!password) return 0;
      if (password.length >= 8) score++;
      if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score++;
      if (/[0-9]/.test(password)) score++;
      if (/[^A-Za-z0-9]/.test(password)) score++;
      return Math.min(3, score);
    }

    function onPasswordInput(val) {
      const strength = evaluatePasswordStrength(val);
      const label = document.getElementById('strength-label');
      const bar1 = document.getElementById('strength-bar-1');
      const bar2 = document.getElementById('strength-bar-2');
      const bar3 = document.getElementById('strength-bar-3');

      [bar1, bar2, bar3].forEach(b => b.className = 'h-1 bg-gray-200 rounded-sm transition-colors');

      if (!val) {
        label.innerText = 'Muy Débil';
        label.className = 'text-red-500';
        return;
      }

      if (strength === 1 || val.length < 6) {
        label.innerText = 'Débil';
        label.className = 'text-red-500';
        bar1.classList.add('!bg-red-500');
      } else if (strength === 2) {
        label.innerText = 'Media';
        label.className = 'text-amber-500';
        bar1.classList.add('!bg-amber-500');
        bar2.classList.add('!bg-amber-500');
      } else if (strength >= 3) {
        label.innerText = 'Fuerte';
        label.className = 'text-aura-emerald';
        bar1.classList.add('!bg-aura-emerald');
        bar2.classList.add('!bg-aura-emerald');
        bar3.classList.add('!bg-aura-emerald');
      }
    }

    function openUserModal(userId = null) {
      if (selectedRole !== 'admin') {
        showToast('Acción Restringida', 'Solo el Administrador posee permisos para administrar usuarios.', 'warning');
        return;
      }

      const modal = document.getElementById('modal-user-backdrop');
      const content = document.getElementById('user-modal-content');
      const form = document.getElementById('user-form');
      const passwordContainer = document.getElementById('user-password-container');
      const passwordInput = document.getElementById('user-password');
      
      form.reset();
      onPasswordInput('');
      
      if (userId) {
        // Edit Mode
        const user = users.find(u => u.id === userId);
        if (!user) return;

        document.getElementById('user-edit-id').value = user.id;
        document.getElementById('user-fullname').value = user.name;
        document.getElementById('user-email').value = user.email;
        document.getElementById('user-role').value = user.role;

        // Hide password section when editing for layout simplicity
        passwordContainer.classList.add('hidden');
        passwordInput.required = false;

        document.getElementById('user-modal-title').innerText = 'Editar Usuario';
        document.getElementById('user-modal-mobile-title').innerText = 'Editar Usuario';
        document.getElementById('user-modal-desc').innerText = 'Modifica los permisos o detalles del usuario.';
      } else {
        // Create Mode
        document.getElementById('user-edit-id').value = '';
        passwordContainer.classList.remove('hidden');
        passwordInput.required = true;

        document.getElementById('user-modal-title').innerText = 'Crear Usuario';
        document.getElementById('user-modal-mobile-title').innerText = 'Crear Usuario';
        document.getElementById('user-modal-desc').innerText = 'Completa los datos del usuario para autorizar sus accesos.';
      }

      modal.classList.remove('hidden');
      setTimeout(() => {
        modal.classList.remove('opacity-0');
        modal.classList.add('opacity-100');
        content.classList.remove('scale-95');
        content.classList.add('scale-100');
      }, 10);
    }

    function closeUserModal() {
      const modal = document.getElementById('modal-user-backdrop');
      const content = document.getElementById('user-modal-content');
      
      modal.classList.remove('opacity-100');
      modal.classList.add('opacity-0');
      content.classList.remove('scale-100');
      content.classList.add('scale-95');
      setTimeout(() => {
        modal.classList.add('hidden');
      }, 200);
    }

    function handleUserSubmit(e) {
      e.preventDefault();
      
      const editId = document.getElementById('user-edit-id').value;
      const fullname = document.getElementById('user-fullname').value;
      const email = document.getElementById('user-email').value;
      const role = document.getElementById('user-role').value;

      if (editId) {
        // Edit submission
        const user = users.find(u => u.id === editId);
        if (user) {
          user.name = fullname;
          user.email = email;
          user.role = role;
          
          // If editing active logged in user, refresh sidebar dynamically
          if (currentUser.id === user.id) {
            currentUser.role = role;
            currentUser.name = fullname;
            currentUser.email = email;
            updateRole(role);
          }
          showToast('Usuario Actualizado', `Se modificaron los datos de ${fullname}`);
          addSystemLog('Usuario Modificado', 'vendedor', `Se actualizaron datos de la cuenta: ${email} (Rol: ${role})`);
        }
      } else {
        // Create submission
        const password = document.getElementById('user-password').value;
        const newUsr = {
          id: 'usr-' + (users.length + 1),
          name: fullname,
          email: email,
          password: password,
          role: role,
          status: 'active',
          lastActive: 'Nunca conectado'
        };
        users.push(newUsr);
        showToast('Usuario Registrado', `Se creó la cuenta del usuario ${fullname}`);
        addSystemLog('Usuario Creado', 'vendedor', `Se registró una nueva cuenta de usuario: ${email} con rol: ${role}`);
      }

      renderUsersTable();
      closeUserModal();
    }

    function toggleUserLock(userId) {
      if (selectedRole !== 'admin') {
        showToast('Acción Restringida', 'Solo el Administrador puede bloquear cuentas.', 'warning');
        return;
      }

      const user = users.find(u => u.id === userId);
      if (!user) return;

      if (currentUser && currentUser.id === user.id) {
        showToast('Restricción de Seguridad', 'No puedes bloquear tu propia cuenta activa.', 'warning');
        return;
      }

      user.status = user.status === 'active' ? 'blocked' : 'active';
      addSystemLog(user.status === 'blocked' ? 'Usuario Bloqueado' : 'Usuario Desbloqueado', 'vendedor', `Se cambió el estado del usuario ${user.email} a ${user.status === 'active' ? 'Activo' : 'Bloqueado'}`);
      showToast(user.status === 'blocked' ? 'Usuario Bloqueado' : 'Usuario Activado', `El acceso para ${user.name} ahora está ${user.status === 'active' ? 'Activo' : 'Bloqueado'}`);
      renderUsersTable();
    }

    // ================= ROLE MANAGEMENT (RBAC SIMULATION) =================
    function updateRole(newRole) {
      selectedRole = newRole;
      
      const roleAvatar = document.getElementById('sidebar-role-avatar');
      const roleName = document.getElementById('sidebar-role-fullname');
      const roleTitle = document.getElementById('sidebar-role-title');

      const btnCreateLink = document.getElementById('btn-create-link');
      const btnCreateUser = document.getElementById('btn-create-user');
      const restrictionOverlay = document.getElementById('tech-specs-restriction-overlay');
      const mobileFab = document.getElementById('mobile-fab');

      // Export buttons
      const btnExportDashboard = document.getElementById('btn-export-dashboard');
      const btnExportTrans = document.getElementById('btn-export-trans');

      // Product Excel/CSV buttons
      const btnExportProducts = document.getElementById('btn-export-products');
      const btnImportProducts = document.getElementById('btn-import-products');

      // Sidebar menu items
      const menuUsuarios = document.getElementById('menu-usuarios');
      const menuLogs = document.getElementById('menu-logs');
      const menuInformacion = document.getElementById('menu-informacion');
      const menuAjustes = document.getElementById('menu-ajustes');

      // Update active profile texts
      if (currentUser) {
        roleName.innerText = currentUser.name;
        
        let displayRole = currentUser.role;
        if (currentUser.role === 'cajero') displayRole = 'Vendedor / Cajero';
        else if (currentUser.role === 'admin') displayRole = 'Administrador';
        else if (currentUser.role === 'operativo') displayRole = 'Operativo';
        
        roleTitle.innerText = displayRole;
      }

      // Hide or show sidebar links based on role (Only Admin has access to admin modules now)
      const showAdminModules = (newRole === 'admin');
      if (showAdminModules) {
        if (menuUsuarios) menuUsuarios.classList.remove('hidden');
        if (menuLogs) menuLogs.classList.remove('hidden');
        if (menuInformacion) menuInformacion.classList.remove('hidden');
        if (menuAjustes) menuAjustes.classList.remove('hidden');
      } else {
        if (menuUsuarios) menuUsuarios.classList.add('hidden');
        if (menuLogs) menuLogs.classList.add('hidden');
        if (menuInformacion) menuInformacion.classList.add('hidden');
        if (menuAjustes) menuAjustes.classList.add('hidden');
      }

      // Hide or show report export buttons based on role
      const canExport = (newRole === 'admin' || newRole === 'operativo');
      if (canExport) {
        if (btnExportDashboard) btnExportDashboard.classList.remove('hidden');
        if (btnExportTrans) btnExportTrans.classList.remove('hidden');
        if (btnExportProducts) btnExportProducts.classList.remove('hidden');
        if (btnImportProducts) btnImportProducts.classList.remove('hidden');
      } else {
        if (btnExportDashboard) btnExportDashboard.classList.add('hidden');
        if (btnExportTrans) btnExportTrans.classList.add('hidden');
        if (btnExportProducts) btnExportProducts.classList.add('hidden');
        if (btnImportProducts) btnImportProducts.classList.add('hidden');
      }

      // Hiding/Showing FAB and Create Link based on role
      const canCreateLinks = (newRole === 'admin' || newRole === 'cajero');
      if (canCreateLinks) {
        if (btnCreateLink) {
          btnCreateLink.classList.remove('hidden');
          btnCreateLink.disabled = false;
        }
        // Only show mobile FAB if on dashboard or links view
        const currentView = document.getElementById('dashboard-view').classList.contains('hidden') ? 'other' : 'dashboard';
        if (mobileFab && currentView === 'dashboard') {
          mobileFab.classList.remove('hidden');
        }
      } else {
        if (btnCreateLink) {
          btnCreateLink.classList.add('hidden');
          btnCreateLink.disabled = true;
        }
        if (mobileFab) {
          mobileFab.classList.add('hidden');
        }
      }

      // Role-specific avatar styles and user edits
      if (newRole === 'admin') {
        roleAvatar.innerText = 'AD';
        roleAvatar.className = 'w-7 h-7 rounded-md bg-aura-primary/10 flex items-center justify-center font-bold text-xs text-aura-primary';
        btnCreateUser.disabled = false;
        btnCreateUser.classList.remove('opacity-45', 'cursor-not-allowed');
        restrictionOverlay.classList.add('hidden');
      } else if (newRole === 'cajero') {
        roleAvatar.innerText = 'CA';
        roleAvatar.className = 'w-7 h-7 rounded-md bg-aura-gold/10 flex items-center justify-center font-bold text-xs text-aura-gold';
        btnCreateUser.disabled = true;
        btnCreateUser.classList.add('opacity-45', 'cursor-not-allowed');
        restrictionOverlay.classList.remove('hidden'); // Block API Token view
      } else if (newRole === 'operativo') {
        roleAvatar.innerText = 'OP';
        roleAvatar.className = 'w-7 h-7 rounded-md bg-slate-100 flex items-center justify-center font-bold text-xs text-slate-700';
        btnCreateUser.disabled = true;
        btnCreateUser.classList.add('opacity-45', 'cursor-not-allowed');
        restrictionOverlay.classList.remove('hidden');
      }
      
      // Refresh sub panels and catalog rendering
      renderProductsCatalog();
      if (selectedTransaction) {
        openDrawer(selectedTransaction);
      }
    }

    // ================= SEARCH & STATUS FILTERS =================
    function filterTable(value) {
      searchQuery = value;
      renderTable();
    }

    // Command Bar search listener (Cmd + K)
    document.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        document.getElementById('table-search').focus();
      }
    });

    function filterTableByStatus(status) {
      statusFilter = status;
      
      const allBtn = document.getElementById('btn-status-all');
      const paidBtn = document.getElementById('btn-status-paid');
      const pendingBtn = document.getElementById('btn-status-pending');
      const cancelledBtn = document.getElementById('btn-status-cancelled');
      
      [allBtn, paidBtn, pendingBtn, cancelledBtn].forEach(btn => {
        if(btn) btn.className = 'px-2.5 py-1 text-[11px] font-semibold rounded text-gray-500 hover:text-gray-900 transition-colors';
      });

      if (status === 'all') {
        if(allBtn) allBtn.className = 'px-2.5 py-1 text-[11px] font-semibold rounded bg-gray-100 text-gray-950 transition-colors';
      } else if (status === 'PAID') {
        if(paidBtn) paidBtn.className = 'px-2.5 py-1 text-[11px] font-semibold rounded bg-gray-100 text-gray-950 transition-colors';
      } else if (status === 'PENDING') {
        if(pendingBtn) pendingBtn.className = 'px-2.5 py-1 text-[11px] font-semibold rounded bg-gray-100 text-gray-950 transition-colors';
      } else if (status === 'CANCELLED') {
        if(cancelledBtn) cancelledBtn.className = 'px-2.5 py-1 text-[11px] font-semibold rounded bg-gray-100 text-gray-950 transition-colors';
      }

      renderTable();
    }

    // Custom confirm dialog logic
    let confirmCallback = null;
    function showCustomConfirm(title, text, callback) {
      document.getElementById('confirm-modal-title').innerText = title;
      document.getElementById('confirm-modal-text').innerText = text;
      confirmCallback = callback;

      const modal = document.getElementById('modal-confirm-backdrop');
      const content = document.getElementById('confirm-modal-content');
      modal.classList.remove('hidden');
      setTimeout(() => {
        modal.classList.remove('opacity-0');
        modal.classList.add('opacity-100');
        content.classList.remove('scale-95');
        content.classList.add('scale-100');
      }, 10);
    }

    function handleCustomConfirm(approved) {
      closeCustomConfirm();
      if (approved && confirmCallback) {
        confirmCallback();
      }
    }

    function closeCustomConfirm() {
      const modal = document.getElementById('modal-confirm-backdrop');
      const content = document.getElementById('confirm-modal-content');
      modal.classList.remove('opacity-100');
      modal.classList.add('opacity-0');
      content.classList.remove('scale-100');
      content.classList.add('scale-95');
      setTimeout(() => {
        modal.classList.add('hidden');
        confirmCallback = null;
      }, 200);
    }

    function updateCalculatedLinkPrice() {
      const amtInput = document.getElementById('link-amount');
      const installmentsSelect = document.getElementById('link-max-installments');
      const listPriceInput = document.getElementById('link-list-price');
      if (!amtInput || !installmentsSelect || !listPriceInput) return;

      const baseAmt = parseFloat(amtInput.value) || 0;
      const installments = parseInt(installmentsSelect.value) || 1;

      const rates = {
        1: 0.0450,
        2: 0.0525,
        3: 0.0575,
        6: 0.0700,
        10: 0.0725,
        12: 0.0800
      };

      const rate = rates[installments] || 0.0450;
      let calculatedPrice = 0;
      if (baseAmt > 0) {
        const fixed_fee_local = gateway_fee_usd * exchange_rate_usd_to_gtq;
        calculatedPrice = (baseAmt + fixed_fee_local) / (1 - rate);
      }

      listPriceInput.value = calculatedPrice > 0 ? calculatedPrice.toFixed(2) : '';
    }

    // ================= MODAL ACTIONS =================
    function openCreateModal() {
      if (selectedRole === 'auditor' || selectedRole === 'operativo') {
        showToast('Acción Restringida', 'Tu rol no posee permisos para crear enlaces de cobro.', 'warning');
        return;
      }
      
      populateLinkProductDropdown();
      clearLinkProductSelection();

      const modal = document.getElementById('modal-backdrop');
      const content = document.getElementById('create-modal-content');
      modal.classList.remove('hidden');
      setTimeout(() => {
        modal.classList.remove('opacity-0');
        modal.classList.add('opacity-100');
        content.classList.remove('scale-95');
        content.classList.add('scale-100');
      }, 10);
    }

    function closeCreateModal() {
      const modal = document.getElementById('modal-backdrop');
      const content = document.getElementById('create-modal-content');
      
      modal.classList.remove('opacity-100');
      modal.classList.add('opacity-0');
      content.classList.remove('scale-100');
      content.classList.add('scale-95');
      setTimeout(() => {
        modal.classList.add('hidden');
        document.getElementById('create-link-form').reset();
        clearLinkProductSelection();
        
        // Reset modal view back to form for next open
        document.getElementById('create-modal-form-view').classList.remove('hidden');
        document.getElementById('create-modal-success-view').classList.add('hidden');
      }, 200);
    }

    // Global variable to store active success checkout URL
    window.activeSuccessUrl = '';

    function copyGeneratedLink() {
      const input = document.getElementById('generated-link-input');
      if (!input) return;
      navigator.clipboard.writeText(input.value).then(() => {
        showToast('Enlace Copiado', 'Se copió el link de pago al portapapeles.', 'success');
      }).catch(err => {
        console.error('Could not copy text: ', err);
      });
    }

    function openClientCheckoutFromSuccess() {
      if (window.activeSuccessUrl) {
        window.open(window.activeSuccessUrl, '_blank');
      }
    }

    function handleCreateLink(e) {
      e.preventDefault();
      
      let amount = parseFloat(document.getElementById('link-amount').value) || 0;
      let maxInstallments = parseInt(document.getElementById('link-max-installments').value) || 12;
      let calculatedListPrice = parseFloat(document.getElementById('link-list-price').value) || amount;

      if (selectedProductsForLink && selectedProductsForLink.length > 0) {
        let sumBase = 0;
        let sumList = 0;
        let minCuotas = 12;

        selectedProductsForLink.forEach(item => {
          const itemBase = parseFloat(item.base_amount || item.price || 0);
          const itemList = parseFloat(item.price || item.unit_price || 0);
          const qty = parseInt(item.quantity || 1, 10);
          
          sumBase += (itemBase * qty);
          sumList += (itemList * qty);

          const itemMax = parseInt(item.max_installments || item.max_cuotas || 12, 10);
          if (itemMax < minCuotas) {
            minCuotas = itemMax;
          }
        });

        amount = sumBase;
        calculatedListPrice = sumList;
        maxInstallments = minCuotas;
      }

      const rates = {
        1: 4.50,
        2: 5.25,
        3: 5.75,
        6: 7.00,
        10: 7.25,
        12: 8.00
      };
      const feePercentageApplied = rates[maxInstallments] || 4.50;

      const client = document.getElementById('link-client').value.trim();
      const productTitle = document.getElementById('link-product-title').value.trim() || 'Cobro de Comercio';
      const phone = document.getElementById('link-phone').value.trim() || 'N/A';
      
      const customDesc = document.getElementById('link-desc').value.trim();
      const currency = document.getElementById('link-currency') ? document.getElementById('link-currency').value : 'GTQ';

      // Check if product is selected from catalog (multiple products support)
      let customImgData = null;
      if (selectedProductsForLink.length > 0) {
        // Find custom image of the first product in the list that has one
        const firstWithImg = selectedProductsForLink.find(item => item.image);
        if (firstWithImg) {
          customImgData = firstWithImg.image;
        }

        // Decrement stock for each selected product
        selectedProductsForLink.forEach(item => {
          const prod = productsCatalog.find(p => p.id === item.id);
          if (prod && prod.stock !== null && prod.stock !== undefined) {
            let qtyToReserve = item.quantity;
            if (prod.stock < qtyToReserve) {
              showToast('Stock Insuficiente', `El stock de "${prod.name}" no alcanza para cubrir la cantidad solicitada. Se apartará el stock disponible.`, 'warning');
              qtyToReserve = prod.stock;
            }
            if (qtyToReserve > 0) {
              prod.stock -= qtyToReserve;
              prod.reserved = (prod.reserved || 0) + qtyToReserve;
            }
          }
        });

        // Sync products catalog to localStorage
        try {
          localStorage.setItem('aurapay_products', JSON.stringify(productsCatalog));
          localStorage.setItem('aurapay_products', JSON.stringify(productsCatalog));
        } catch (err) {
          console.error(err);
        }
        
        // Rerender catalog grid
        renderProductsCatalog();
      }
      
      // Read selected payment methods
      const allowedMethods = [];
      if (document.getElementById('method-card').checked) allowedMethods.push('card');
      if (document.getElementById('method-virtual').checked) allowedMethods.push('virtual');
      if (document.getElementById('method-cash').checked) allowedMethods.push('cash');
      if (document.getElementById('method-cuik').checked) allowedMethods.push('cuik');
      if (document.getElementById('method-wallet').checked) allowedMethods.push('wallet');
      
      // Fallback to card if none selected
      if (allowedMethods.length === 0) {
        allowedMethods.push('card');
        document.getElementById('method-card').checked = true;
      }
      
      const methodLabels = {
        card: 'Tarjeta',
        virtual: 'Pago con banca',
        cash: 'Pagos en efectivo',
        cuik: 'Billetera electrónica',
        wallet: 'Billeteras Digitales'
      };
      const typeDisplay = allowedMethods.map(m => methodLabels[m]).join(', ');

      let merchantName = 'Café Don Arturo, S.A.';
      let placeholder = 'CoffeeBagIcon';
      let subtext = 'Tostaduría de especialidad y café gourmet';

      const newTransaction = {
        transaction_id: generateTransactionId(),
        date: formatDate(new Date()),
        client: client,
        status: 'PENDING',
        base_amount: amount,
        max_installments: maxInstallments,
        fee_percentage_applied: feePercentageApplied,
        calculated_list_price: calculatedListPrice,
        amount: calculatedListPrice,
        currency: 'GTQ',
        idempotency_key: generateIdempotencyKey(),
        phone: phone,
        type: typeDisplay,
        merchant: {
          name: merchantName,
          subtext: subtext,
          logo_svg_placeholder: placeholder
        },
        product: {
          title: productTitle,
          description: customDesc
        },
        image_preset: customImgData ? 'custom' : 'generic',
        custom_image: customImgData,
        products: JSON.parse(JSON.stringify(selectedProductsForLink)), // store all products info
        allowed_methods: allowedMethods,
        token: null,
        timeline: [formatDate(new Date()), null, null, null]
      };

      transactions.unshift(newTransaction);
      // Update LocalStorage cache
      try {
        localStorage.setItem('aurapay_transactions', JSON.stringify(transactions));
        localStorage.setItem('aurapay_transactions', JSON.stringify(transactions));
      } catch (e) {
        console.error('Failed to sync transactions to localStorage:', e);
      }
      
      calculateKPIs();
      renderTable();
      addNotification('Enlace Creado', `${formatCurrency(amount)} emitidos para ${client} (${typeDisplay})`, 'create');
      addSystemLog('Cobro Creado', 'transaccion', `Enlace ${newTransaction.transaction_id} por ${formatCurrency(amount)} generado para el cliente: ${client}. Métodos: ${typeDisplay}`);
      
      if (webhookSettings.enabled && webhookSettings.events.includes('link.created')) {
        addSystemLog('Webhook Despachado', 'seguridad', `POST webhook enviado a ${webhookSettings.url} para evento link.created (Respuesta: 200 OK)`);
        setTimeout(() => {
          showToast('Webhook Despachado', `Notificación de creación enviada a ${webhookSettings.url}`, 'success');
        }, 800);
      }
      
      // Instead of closing the modal, show success view
      const queryParams = new URLSearchParams({
        id: newTransaction.transaction_id,
        amount: newTransaction.amount,
        base_amount: newTransaction.base_amount,
        calculated_list_price: newTransaction.calculated_list_price,
        max_installments: newTransaction.max_installments,
        client: newTransaction.client,
        concept: newTransaction.product.title,
        desc: newTransaction.product.description,
        merchant: newTransaction.merchant.name,
        subtext: newTransaction.merchant.subtext,
        phone: newTransaction.phone,
        img: newTransaction.image_preset,
        methods: newTransaction.allowed_methods.join(',')
      });

      if (selectedProductsForLink && selectedProductsForLink.length > 0) {
        queryParams.set('products', JSON.stringify(selectedProductsForLink));
      }

      const fullUrl = `aurapay-checkout.html?${queryParams.toString()}`;
      
      document.getElementById('generated-link-input').value = fullUrl;
      window.activeSuccessUrl = fullUrl;

      // Swap views in the modal
      document.getElementById('create-modal-form-view').classList.add('hidden');
      document.getElementById('create-modal-success-view').classList.remove('hidden');
      
      showToast('Enlace Creado', `Se generó el cobro ${newTransaction.transaction_id} por ${formatCurrency(amount)}`);
    }

    
    function freeInventory(txn) {
      if (!txn) return;
      showCustomConfirm(
        'Liberar Inventario',
        `¿Estás seguro que deseas liberar el inventario apartado de esta transacción? Esto cancelará el link y los productos volverán a estar disponibles.`,
        () => {
          let updated = false;
          if (txn.products && txn.products.length > 0) {
            txn.products.forEach(item => {
              const prod = productsCatalog.find(p => p.id === item.id);
              if (prod) {
                const reservedQty = Math.min(prod.reserved || 0, item.quantity);
                if (reservedQty > 0) {
                  prod.reserved -= reservedQty;
                  prod.stock = (prod.stock !== null && prod.stock !== undefined ? prod.stock : 0) + reservedQty;
                  updated = true;
                }
              }
            });
          }
          
          if (updated) {
            try {
              localStorage.setItem('aurapay_products', JSON.stringify(productsCatalog));
            } catch (err) { console.error(err); }
            renderProductsCatalog();
          }
          
          txn.status = 'CANCELLED';
          try {
            localStorage.setItem('aurapay_transactions', JSON.stringify(transactions));
          } catch(err) { console.error(err); }
          
          renderTable();
          renderTransactionsReport();
          closeDrawer();
          showToast('Inventario Liberado', 'Se ha devuelto el inventario apartado al stock principal.', 'success');
        }
      );
    }
    
    function calculateNetReceived(t) {
      if (!t) return 0;
      const amount = parseFloat(t.amount) || 0;
      const baseNet = parseFloat(t.base_amount) || amount;
      const modality = t.payment_modality || t.type || 'Contado';
      
      const isEfectivo = modality.includes('Virtual') || 
                         modality.includes('Rural') || 
                         modality.includes('Cuik') || 
                         modality.includes('Efectivo') || 
                         modality.includes('Banca');
      
      if (isEfectivo) {
        return baseNet;
      }
      
      let appliedRate = 0.0450; // Tarjeta Contado por defecto: 4.50%
      
      const matchCuotas = modality.match(/\((\d+)\)/);
      if (matchCuotas) {
        const numCuotas = parseInt(matchCuotas[1]);
        const INST_RATES = { 
          1: 0.0450,
          2: 0.0525, 
          3: 0.0575, 
          6: 0.0700, 
          10: 0.0725, 
          12: 0.0800, 
          15: 0.1000, 
          18: 0.1200, 
          24: 0.1250, 
          36: 0.1350, 
          48: 0.1675 
        };
        if (INST_RATES[numCuotas] !== undefined) {
          appliedRate = INST_RATES[numCuotas];
        }
      } else if (modality.toLowerCase().includes('contado')) {
        appliedRate = 0.0450;
      }
      
      const fixedFeeUSD = t.gateway_fee_usd !== undefined ? t.gateway_fee_usd : (typeof gateway_fee_usd !== 'undefined' ? gateway_fee_usd : 0.15);
      const exRate = t.exchange_rate_usd_to_gtq !== undefined ? t.exchange_rate_usd_to_gtq : (typeof exchange_rate_usd_to_gtq !== 'undefined' ? exchange_rate_usd_to_gtq : 7.90);
      const fixedFeeLocal = fixedFeeUSD * exRate;
      
      const commission = (amount * appliedRate) + fixedFeeLocal;
      let netReceived = amount - commission;
      
      if (netReceived < 0) netReceived = 0;
      
      if (Math.abs(netReceived - baseNet) < 0.05) {
        netReceived = baseNet;
      }
      
      return netReceived;
    }

    // ================= DRAWER ACTIONS =================

    function openDrawer(transaction) {
      selectedTransaction = transaction;

      document.getElementById('drawer-title').innerText = transaction.transaction_id;
      const freeBtn = document.getElementById('drawer-free-inventory-btn');
      if (freeBtn) {
        if ((transaction.status === 'PENDING' || transaction.status === 'INITIATED') && transaction.products && transaction.products.length > 0) {
           freeBtn.classList.remove('hidden');
        } else {
           freeBtn.classList.add('hidden');
        }
      }
      document.getElementById('drawer-subtitle').innerText = `Establecimiento: ${transaction.merchant.name}`;
      document.getElementById('detail-client').innerText = transaction.client;
      document.getElementById('detail-phone').innerText = transaction.phone;
      document.getElementById('detail-desc').innerText = transaction.product.title;
      
      const detailImgContainer = document.getElementById('detail-product-img-container');
      if (detailImgContainer) {
        if (transaction.custom_image) {
          detailImgContainer.classList.remove('hidden');
          detailImgContainer.innerHTML = `<img src="${transaction.custom_image}" class="w-full h-full object-cover">`;
        } else {
          detailImgContainer.classList.add('hidden');
          detailImgContainer.innerHTML = '';
        }
      }

      document.getElementById('detail-merchant').innerText = transaction.merchant.name;
      document.getElementById('detail-currency').innerText = transaction.currency;
      document.getElementById('detail-amount').innerText = formatCurrency(transaction.amount);
      document.getElementById('detail-idempotency').innerText = transaction.idempotency_key;
      document.getElementById('detail-modality').innerText = transaction.payment_modality || 'Contado';
      document.getElementById('detail-net-received').innerText = formatCurrency(calculateNetReceived(transaction));

      document.getElementById('detail-base-amount').innerText = formatCurrency(transaction.base_amount || transaction.amount);
      document.getElementById('detail-list-price').innerText = formatCurrency(transaction.calculated_list_price || transaction.amount);
      const detailInst = transaction.max_installments || 1;
      const detailFee = transaction.fee_percentage_applied || 4.50;
      document.getElementById('detail-fee-rate').innerText = `${detailInst} ${detailInst === 1 ? 'mes' : 'meses'} (${detailFee.toFixed(2)}%)`;

      // Populate billing details
      const billing = transaction.billing || {};
      document.getElementById('detail-need-invoice').innerText = billing.need_invoice ? 'Sí' : 'No';
      document.getElementById('detail-order-number').innerText = billing.order_number || 'N/A';
      document.getElementById('detail-nit').innerText = billing.nit || 'N/A';
      document.getElementById('detail-billing-name').innerText = billing.client_name || 'N/A';
      document.getElementById('detail-contact-email').innerText = billing.contact_email || 'N/A';

      const tokenEl = document.getElementById('detail-token');
      if (transaction.token) {
        tokenEl.innerText = transaction.token;
      } else {
        tokenEl.innerText = 'No se ha registrado tarjeta/transferencia para el pago';
      }

      updateTimelineUI(transaction);

      // Render product itemized list inside the drawer if there are products
      const productsSection = document.getElementById('detail-products-section');
      const productsList = document.getElementById('detail-products-list');
      if (productsSection && productsList) {
        if (transaction.products && transaction.products.length > 0) {
          productsSection.classList.remove('hidden');
          productsList.innerHTML = '';
          transaction.products.forEach(item => {
            const div = document.createElement('div');
            div.className = 'flex items-center justify-between py-2 text-[11px] text-gray-700';
            div.innerHTML = `
              <div class="flex items-center gap-2 min-w-0 flex-1">
                ${item.image ? `<img src="${item.image}" class="w-7 h-7 rounded object-cover border border-gray-150 flex-shrink-0">` : `<div class="w-7 h-7 rounded border border-gray-200 bg-gray-50 flex items-center justify-center text-[8px] text-gray-400 font-bold uppercase flex-shrink-0">P</div>`}
                <div class="min-w-0 flex-1">
                  <p class="font-semibold text-gray-900 truncate">${item.name}</p>
                  <p class="text-[9px] text-gray-400">Q ${item.price.toFixed(2)} x ${item.quantity}</p>
                </div>
              </div>
              <div class="text-right font-bold text-gray-950 ml-2">
                Q ${(item.price * item.quantity).toFixed(2)}
              </div>
            `;
            productsList.appendChild(div);
          });
        } else {
          productsSection.classList.add('hidden');
          productsList.innerHTML = '';
        }
      }

      const backdrop = document.getElementById('drawer-backdrop');
      const container = document.getElementById('drawer-container');
      
      backdrop.classList.remove('hidden');
      setTimeout(() => {
        backdrop.classList.remove('opacity-0');
        backdrop.classList.add('opacity-100');
        container.classList.remove('translate-x-full');
        container.classList.add('translate-x-0');
      }, 10);
    }

    function closeDrawer() {
      const backdrop = document.getElementById('drawer-backdrop');
      const container = document.getElementById('drawer-container');
      
      backdrop.classList.remove('opacity-100');
      backdrop.classList.add('opacity-0');
      container.classList.remove('translate-x-0');
      container.classList.add('translate-x-full');
      setTimeout(() => {
        backdrop.classList.add('hidden');
        selectedTransaction = null;
      }, 300);
    }



    function updateTimelineUI(t) {
      const nodes = [
        { node: null, time: document.getElementById('timeline-created-time') },
        { node: document.getElementById('timeline-opened-node'), time: document.getElementById('timeline-opened-time') },
        { node: document.getElementById('timeline-authorized-node'), time: document.getElementById('timeline-authorized-time') }
      ];

      for (let i = 1; i < 3; i++) {
        nodes[i].node.className = 'absolute -left-[24.5px] top-1 w-2 h-2 rounded-full border-2 border-white bg-gray-300';
      }

      nodes[0].time.innerText = t.timeline[0] || t.date;

      if (t.status === 'PAID') {
        nodes[1].node.className = 'absolute -left-[24.5px] top-1 w-2 h-2 rounded-full border-2 border-white bg-aura-emerald ring-1 ring-aura-emerald';
        nodes[1].time.innerText = t.timeline[1] || '2026-07-11 10:16';
        
        nodes[2].node.className = 'absolute -left-[24.5px] top-1 w-2 h-2 rounded-full border-2 border-white bg-aura-emerald ring-1 ring-aura-emerald';
        nodes[2].time.innerText = t.timeline[2] || '2026-07-11 10:18';
        
        document.getElementById('timeline-opened-title').innerText = 'Abierto por Cliente';
        document.getElementById('timeline-authorized-title').innerText = 'Pago Procesado';
      } else if (t.status === 'PENDING') {
        nodes[1].node.className = 'absolute -left-[24.5px] top-1 w-2 h-2 rounded-full border-2 border-white bg-aura-gold ring-1 ring-aura-gold';
        nodes[1].time.innerText = 'Abierto recientemente';
        
        nodes[2].time.innerText = 'Esperando Hosted Fields';
        
        document.getElementById('timeline-opened-title').innerText = 'Abierto (Esperando pago)';
        document.getElementById('timeline-authorized-title').innerText = 'Pendiente de Autorización';
      } else if (t.status === 'EXPIRED') {
        nodes[1].node.className = 'absolute -left-[24.5px] top-1 w-2 h-2 rounded-full border-2 border-white bg-red-500';
        nodes[1].time.innerText = t.timeline[1] || 'Caducidad';
        
        nodes[2].time.innerText = 'Enlace Cancelado/Inactivo';
        
        document.getElementById('timeline-opened-title').innerText = 'Expirado';
        document.getElementById('timeline-authorized-title').innerText = 'Transacción Abortada';
      }
    }



    // ================= GENERAL UTILITIES =================
    function copyIdempotency() {
      const code = document.getElementById('detail-idempotency').innerText;
      navigator.clipboard.writeText(code).then(() => {
        const tooltip = document.getElementById('copy-tooltip');
        tooltip.classList.remove('opacity-0');
        tooltip.classList.add('opacity-100');
        setTimeout(() => {
          tooltip.classList.remove('opacity-100');
          tooltip.classList.add('opacity-0');
        }, 1500);
      });
    }

    function renderNotificationsUI() {
      const container = document.getElementById('notifications-list-container');
      const badgeDot = document.getElementById('notif-badge-dot');
      const badgeCount = document.getElementById('notif-count-badge');
      
      container.innerHTML = '';
      
      const unreadCount = notifications.filter(n => !n.read).length;
      
      // Update badge counts
      if (unreadCount > 0) {
        badgeDot.classList.remove('hidden');
        badgeCount.innerText = unreadCount;
        badgeCount.classList.remove('hidden');
      } else {
        badgeDot.classList.add('hidden');
        badgeCount.classList.add('hidden');
      }
      
      if (notifications.length === 0) {
        // Empty state
        container.innerHTML = `
          <div class="p-6 text-center text-gray-400 flex flex-col items-center justify-center space-y-2">
            <div class="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-300 mx-auto">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>
            </div>
            <p class="font-semibold text-[10.5px] text-gray-900">Todo al día</p>
            <p class="text-[9.5px]">No tienes notificaciones pendientes.</p>
          </div>
        `;
        return;
      }
      
      notifications.forEach(n => {
        const item = document.createElement('div');
        // Unread items have a distinct style
        item.className = `p-3 flex gap-3 transition-colors cursor-pointer border-b border-gray-100 ${n.read ? 'opacity-65 hover:bg-gray-50/50' : 'bg-amber-50/10 hover:bg-amber-50/20'}`;
        item.onclick = () => markNotificationAsRead(n.id);
        
        let iconHtml = '';
        if (n.type === 'payment') {
          // Success check circle - amber/gold
          iconHtml = `
            <div class="w-7 h-7 rounded-full bg-amber-50 text-aura-goldText flex items-center justify-center flex-shrink-0 shadow-sm border border-amber-100">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>`;
        } else if (n.type === 'create') {
          // Link tag
          iconHtml = `
            <div class="w-7 h-7 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0 shadow-sm border border-amber-100">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" /></svg>
            </div>`;
        } else {
          // Security / access shield - slate
          iconHtml = `
            <div class="w-7 h-7 rounded-full bg-slate-100 text-slate-650 flex items-center justify-center flex-shrink-0 shadow-sm border border-slate-200">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
            </div>`;
        }
        
        item.innerHTML = `
          ${iconHtml}
          <div class="flex-1 min-w-0">
            <div class="flex justify-between items-start gap-1">
              <p class="font-semibold text-gray-900 truncate text-[11px]">${n.title}</p>
              <span class="text-[8.5px] text-gray-400 font-medium whitespace-nowrap">${n.time}</span>
            </div>
            <p class="text-gray-500 text-[10px] leading-snug mt-0.5">${n.description}</p>
          </div>
          ${!n.read ? '<span class="w-1.5 h-1.5 rounded-full bg-aura-primary flex-shrink-0 self-center ml-1"></span>' : ''}
        `;
        container.appendChild(item);
      });
    }

    function toggleNotifications() {
      const menu = document.getElementById('notifications-menu');
      if (menu.classList.contains('hidden')) {
        renderNotificationsUI();
        menu.classList.remove('hidden');
        setTimeout(() => {
          menu.classList.remove('opacity-0', 'scale-95');
          menu.classList.add('opacity-100', 'scale-100');
        }, 10);
      } else {
        menu.classList.remove('opacity-100', 'scale-100');
        menu.classList.add('opacity-0', 'scale-95');
        setTimeout(() => {
          menu.classList.add('hidden');
        }, 200);
      }
    }

    function saveNotifications() {
      if (!currentUser) return;
      localStorage.setItem(`aurapay_notifications_${currentUser.email}`, JSON.stringify(notifications));
      localStorage.setItem(`aurapay_notifications_${currentUser.email}`, JSON.stringify(notifications));
    }

    function loadNotifications() {
      if (!currentUser) {
        notifications = [];
        return;
      }
      try {
        const stored = localStorage.getItem(`aurapay_notifications_${currentUser.email}`) || localStorage.getItem(`aurapay_notifications_${currentUser.email}`);
        if (stored) {
          notifications = JSON.parse(stored);
        } else {
          // Initialize default notifications for the user
          notifications = [
            { id: 'notif-1', title: 'Enlace chk_7x89ab Creado', description: 'Q 145.00 emitidos para Academia de Barismo', time: 'Hace 5 min', type: 'create', read: false },
            { id: 'notif-2', title: 'Pago Confirmado', description: 'El cliente completó el pago de chk_3w89ij (Q 450.00)', time: 'Hace 1 hora', type: 'payment', read: false },
            { id: 'notif-3', title: 'Acceso Autorizado', description: `${currentUser.name} inició sesión en POS Virtual`, time: 'Ahora mismo', type: 'security', read: true }
          ];
          saveNotifications();
        }
      } catch (e) {
        notifications = [];
      }
    }

    function markNotificationAsRead(id) {
      const notif = notifications.find(n => n.id === id);
      if (notif) {
        notif.read = true;
        saveNotifications();
        renderNotificationsUI();
      }
    }

    function markAllNotificationsAsRead() {
      notifications.forEach(n => n.read = true);
      saveNotifications();
      renderNotificationsUI();
      showToast('Feed Actualizado', 'Todas las notificaciones marcadas como leídas.');
    }

    function clearAllNotifications() {
      notifications = [];
      saveNotifications();
      renderNotificationsUI();
      showToast('Bandeja Limpia', 'Se eliminaron todas las notificaciones.');
    }

    function addNotification(title, description, type) {
      const newNotif = {
        id: 'notif-' + Date.now(),
        title: title,
        description: description,
        time: 'Ahora mismo',
        type: type,
        read: false
      };
      notifications.unshift(newNotif);
      saveNotifications();
      
      // Update badge dot dynamically
      const badgeDot = document.getElementById('notif-badge-dot');
      badgeDot.classList.remove('hidden');
    }

    function addSystemLog(event, category, details) {
      const actor = currentUser ? currentUser.email : (userPreLoginAttempt ? userPreLoginAttempt.email : 'Sistema / Cliente');
      
      const now = new Date();
      const timestamp = formatDate(now) + ' ' + String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0') + ':' + String(now.getSeconds()).padStart(2, '0');
      
      systemLogs.unshift({
        timestamp: timestamp,
        event: event,
        actor: actor,
        category: category,
        details: details
      });
      
      // If we are currently viewing logs, redraw table
      const logsView = document.getElementById('logs-view');
      if (logsView && !logsView.classList.contains('hidden')) {
        renderLogsTable();
      }
    }

    function renderLogsTable() {
      const tbody = document.getElementById('logs-table-body');
      const totalCountEl = document.getElementById('logs-total-count');
      if (!tbody || !totalCountEl) return;
      tbody.innerHTML = '';
      
      const filtered = systemLogs.filter(log => {
        // Filter by Category
        const matchCategory = logCategoryFilter === 'all' || log.category === logCategoryFilter;
        
        // Filter by Search Query
        const matchSearch = logSearchQuery === '' ||
                            log.event.toLowerCase().includes(logSearchQuery.toLowerCase()) ||
                            log.actor.toLowerCase().includes(logSearchQuery.toLowerCase()) ||
                            log.details.toLowerCase().includes(logSearchQuery.toLowerCase());
                            
        return matchCategory && matchSearch;
      });
      
      if (filtered.length === 0) {
        tbody.innerHTML = `
          <tr>
            <td colspan="5" class="px-6 py-8 text-center text-gray-400 font-medium text-xs">
              No se encontraron registros de bitácora coincidentes.
            </td>
          </tr>
        `;
        totalCountEl.innerText = 'Mostrando 0 registros';
        return;
      }
      
      filtered.forEach(log => {
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-gray-50/50 border-b border-gray-100 transition-colors text-xs';
        
        let catStyle = '';
        let catLabel = '';
        if (log.category === 'seguridad') {
          catStyle = 'bg-slate-100 text-slate-700 border-slate-200';
          catLabel = 'Seguridad';
        } else if (log.category === 'transaccion') {
          catStyle = 'bg-amber-50 text-aura-goldText border-amber-200/50';
          catLabel = 'Transacción';
        } else {
          catStyle = 'bg-slate-100 text-slate-600 border-slate-200/50';
          catLabel = 'Usuarios';
        }
        
        tr.innerHTML = `
          <td class="px-6 py-3.5 text-gray-450 font-medium font-mono whitespace-nowrap">${log.timestamp}</td>
          <td class="px-6 py-3.5 font-bold text-gray-900 whitespace-nowrap">${log.event}</td>
          <td class="px-6 py-3.5 font-medium text-gray-700 truncate max-w-[180px] whitespace-nowrap">${log.actor}</td>
          <td class="px-6 py-3.5 text-center whitespace-nowrap">
            <span class="px-2 py-0.5 rounded border text-[9.5px] font-semibold ${catStyle}">${catLabel}</span>
          </td>
          <td class="px-6 py-3.5 text-gray-500 font-normal leading-relaxed">${log.details}</td>
        `;
        tbody.appendChild(tr);
      });
      
      totalCountEl.innerText = `Mostrando ${filtered.length} de ${systemLogs.length} registros`;
    }

    function filterLogsByCategory(category) {
      logCategoryFilter = category;
      
      const allBtn = document.getElementById('btn-log-cat-all');
      const segBtn = document.getElementById('btn-log-cat-seguridad');
      const tranBtn = document.getElementById('btn-log-cat-transaccion');
      const vendBtn = document.getElementById('btn-log-cat-vendedor');
      
      const btns = [
        { el: allBtn, cat: 'all' },
        { el: segBtn, cat: 'seguridad' },
        { el: tranBtn, cat: 'transaccion' },
        { el: vendBtn, cat: 'vendedor' }
      ];
      
      btns.forEach(btn => {
        if (!btn.el) return;
        if (btn.cat === category) {
          btn.el.className = 'px-2.5 py-1 text-[11px] font-semibold rounded bg-gray-100 text-gray-950 transition-colors';
        } else {
          btn.el.className = 'px-2.5 py-1 text-[11px] font-semibold rounded text-gray-500 hover:text-gray-900 transition-colors';
        }
      });
      
      renderLogsTable();
    }

    function searchLogs(query) {
      logSearchQuery = query;
      renderLogsTable();
    }

    function exportLogsExcel() {
      if (systemLogs.length === 0) {
        showToast('Bitácora Vacía', 'No hay registros en la bitácora para exportar.', 'warning');
        return;
      }

      // Create CSV content compatible with Excel
      let csvContent = "\uFEFFsep=;\r\n"; // Byte Order Mark + Delimiter specifier for Excel
      csvContent += "Fecha y Hora;Evento;Actor/Usuario;Categoría;Detalles\r\n";

      systemLogs.forEach(log => {
        const detailsEscaped = log.details.replace(/"/g, '""');
        csvContent += `"${log.timestamp}";"${log.event}";"${log.actor}";"${log.category}";"${detailsEscaped}"\r\n`;
      });

      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.setAttribute("href", url);
      link.setAttribute("download", `aurapay_bitacora_${formatDate(new Date()).replace(/ /g, '_')}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      showToast('Exportación Exitosa', 'Bitácora descargada en formato compatible con Excel.', 'success');
      addSystemLog('Exportación de Logs', 'seguridad', `Se exportaron ${systemLogs.length} registros de bitácora en formato CSV/Excel.`);
    }

    function exportTransactionsExcel() {
      // Filter first using same logic as renderTable
      const filtered = transactions.filter(t => {
        const matchSearch = t.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            t.transaction_id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            t.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            t.merchant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            t.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            t.product.title.toLowerCase().includes(searchQuery.toLowerCase());
        
        const matchStatus = statusFilter === 'all' || t.status === statusFilter;
        
        // Date range filter
        const itemDateStr = t.date.substring(0, 10);
        const startDate = document.getElementById('filter-start-date').value;
        const endDate = document.getElementById('filter-end-date').value;
        let matchDate = true;
        if (startDate) matchDate = matchDate && (itemDateStr >= startDate);
        if (endDate) matchDate = matchDate && (itemDateStr <= endDate);

        return matchSearch && matchStatus && matchDate;
      });

      if (filtered.length === 0) {
        showToast('Reporte Vacío', 'No hay transacciones que coincidan con los filtros activos para exportar.', 'warning');
        return;
      }

      // Create CSV content compatible with Excel
      let csvContent = "\uFEFFsep=;\r\n"; // Byte Order Mark + Delimiter specifier for Excel
      csvContent += "Referencia;Fecha;Cliente;Establecimiento;Concepto;Monto;Moneda;Tipo de Pago;Estado;Token/Referencia;Requiere Factura;NIT;Razón Social;Número de Orden;Correo de Contacto;Modalidad de Pago\r\n";
      
      filtered.forEach(t => {
        const amountFormatted = t.amount.toFixed(2);
        const tokenVal = t.token || 'N/A';
        const typeVal = t.type || 'Cobro no realizado';
        
        const billing = t.billing || {};
        const reqFactura = billing.need_invoice ? 'Sí' : 'No';
        const nit = billing.nit || 'N/A';
        const razonSocial = billing.client_name || 'N/A';
        const orderNumber = billing.order_number || 'N/A';
        const contactEmail = billing.contact_email || 'N/A';
        const modality = t.payment_modality || 'Contado';

        csvContent += `"${t.transaction_id}";"${t.date}";"${t.client}";"${t.merchant.name}";"${t.product.title}";"${amountFormatted}";"${t.currency}";"${typeVal}";"${t.status}";"${tokenVal}";"${reqFactura}";"${nit}";"${razonSocial}";"${orderNumber}";"${contactEmail}";"${modality}"\r\n`;
      });
      
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.setAttribute("href", url);
      link.setAttribute("download", `aurapay_operaciones_${formatDate(new Date()).replace(/ /g, '_')}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      showToast('Exportación Exitosa', 'Operaciones descargadas en formato compatible con Excel.', 'success');
      addSystemLog('Exportación de Operaciones', 'transaccion', `Se exportaron ${filtered.length} transacciones en formato CSV/Excel.`);
    }

    // ================= MERCHANT BRANDING & LEGAL SETTINGS =================
    const defaultBranding = {
      primary_color: '#272757',
      subtext: 'Tostaduría de especialidad y café gourmet',
      logo_url: 'logo_cafe_don_arturo.png',
      custom_terms: 'TÉRMINOS Y CONDICIONES DE VENTA\n\n1. ACEPTACIÓN Y PROCESAMIENTO: Toda compra realizada a través de esta pasarela constituye un acuerdo de venta final. Los pedidos son procesados de inmediato una vez autorizada la transacción.\n\n2. POLÍTICA DE DEVOLUCIONES Y CAMBIOS: Los cambios de producto o solicitudes de garantía se atienden dentro de los 30 días posteriores a la fecha de emisión del comprobante, presentando la factura original de compra.\n\n3. ENTREGAS Y SERVICIOS: La entrega de bienes y servicios está sujeta a la disponibilidad confirmada por el comercio.',
      custom_privacy: 'AVISO DE PRIVACIDAD Y PROTECCIÓN DE DATOS\n\nSus datos personales son tratados con estricta confidencialidad bajo los estándares de seguridad de EthosPay. La información recopilada se utiliza exclusivamente para la gestión de su pedido, procesamiento del pago y envío de comprobantes digitales.'
    };

    let merchantBranding = { ...defaultBranding };

    function updateEthosAdaptiveLogos() {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark' || document.body.classList.contains('dark');
      const logoFullEls = document.querySelectorAll('.ethos-logo-full');
      const logoIconEls = document.querySelectorAll('.ethos-logo-icon');

      logoFullEls.forEach(el => {
        el.src = isDark ? 'ethos_logo_light_full.png' : 'ethos_logo_dark_full.png';
      });
      logoIconEls.forEach(el => {
        el.src = isDark ? 'ethos_logo_light_icon.png' : 'ethos_logo_dark_icon.png';
      });
    }

    function applyAdminBrandingTheme(brandColor) {
      const color = (brandColor && brandColor.match(/^#[0-9A-Fa-f]{6}$/)) ? brandColor : '#272757';
      let existing = document.getElementById('dynamic-admin-branding-style');
      if (!existing) {
        existing = document.createElement('style');
        existing.id = 'dynamic-admin-branding-style';
        document.head.appendChild(existing);
      }

      existing.innerHTML = `
        :root {
          --aura-primary: ${color};
        }
        #app-dashboard .bg-aura-primary, #app-dashboard button.bg-aura-primary, #app-dashboard div.bg-aura-primary, #app-dashboard a.bg-aura-primary { background-color: ${color} !important; }
        #app-dashboard .bg-aura-primaryHover:hover, #app-dashboard button.bg-aura-primaryHover:hover { filter: brightness(0.9) !important; }
        #app-dashboard .text-aura-primary { color: ${color} !important; }
        #app-dashboard .border-aura-primary { border-color: ${color} !important; }
        #app-dashboard .focus\\:ring-aura-primary:focus { --tw-ring-color: ${color} !important; border-color: ${color} !important; }
        #app-dashboard .focus\\:border-aura-primary:focus { border-color: ${color} !important; }
        #app-dashboard .focus-within\\:ring-aura-primary:focus-within { --tw-ring-color: ${color} !important; border-color: ${color} !important; }
        #app-dashboard .focus-within\\:border-aura-primary:focus-within { border-color: ${color} !important; }
        #mobile-fab { background-color: ${color} !important; }
        #toast-icon { background-color: ${color} !important; }
      `;
    }

    function loadMerchantBranding() {
      try {
        const stored = localStorage.getItem('aurapay_merchant_branding');
        if (stored) {
          merchantBranding = { ...defaultBranding, ...JSON.parse(stored) };
        }
      } catch(e) {
        console.error('Error loading merchant branding:', e);
      }
      applyAdminBrandingTheme(merchantBranding.primary_color);
      updateMerchantLogoDisplay();
      updateEthosAdaptiveLogos();
    }

    function updateMerchantLogoDisplay() {
      const logoUrl = merchantBranding.logo_url || 'logo_cafe_don_arturo.png';
      const sidebarLogo = document.getElementById('dashboard-merchant-logo');
      const headerLogo = document.getElementById('header-merchant-logo');

      if (sidebarLogo) sidebarLogo.src = logoUrl;
      if (headerLogo) headerLogo.src = logoUrl;
    }

    function initBrandingUI() {
      loadMerchantBranding();
      const colorPicker = document.getElementById('brand-color-picker');
      const colorHex = document.getElementById('brand-color-hex');
      const logoUrlInput = document.getElementById('brand-logo-url');
      const subtextInput = document.getElementById('brand-subtext');
      const termsInput = document.getElementById('brand-custom-terms');
      const privacyInput = document.getElementById('brand-custom-privacy');

      if (colorPicker) colorPicker.value = merchantBranding.primary_color || '#272757';
      if (colorHex) colorHex.value = merchantBranding.primary_color || '#272757';
      if (logoUrlInput) logoUrlInput.value = merchantBranding.logo_url || '';
      if (subtextInput) subtextInput.value = merchantBranding.subtext || '';
      if (termsInput) termsInput.value = merchantBranding.custom_terms || '';
      if (privacyInput) privacyInput.value = merchantBranding.custom_privacy || '';

      updateLiveBrandPreview();
    }

    function onMerchantLogoFileSelect(fileInput) {
      if (fileInput.files && fileInput.files[0]) {
        const file = fileInput.files[0];
        const reader = new FileReader();
        reader.onload = function(e) {
          const logoUrlInput = document.getElementById('brand-logo-url');
          if (logoUrlInput) logoUrlInput.value = e.target.result;
          merchantBranding.logo_url = e.target.result;
          updateLiveBrandPreview();
        };
        reader.readAsDataURL(file);
      }
    }

    function onBrandColorPickerChange(val) {
      const colorHex = document.getElementById('brand-color-hex');
      if (colorHex) colorHex.value = val;
      updateLiveBrandPreview();
      applyAdminBrandingTheme(val);
    }

    function onBrandColorHexInput(val) {
      if (val.match(/^#[0-9A-Fa-f]{6}$/)) {
        const colorPicker = document.getElementById('brand-color-picker');
        if (colorPicker) colorPicker.value = val;
        applyAdminBrandingTheme(val);
      }
      updateLiveBrandPreview();
    }

    function selectBrandColorPreset(hex) {
      const colorPicker = document.getElementById('brand-color-picker');
      const colorHex = document.getElementById('brand-color-hex');
      if (colorPicker) colorPicker.value = hex;
      if (colorHex) colorHex.value = hex;
      updateLiveBrandPreview();
      applyAdminBrandingTheme(hex);
    }

    function updateLiveBrandPreview() {
      const colorHex = document.getElementById('brand-color-hex');
      const logoUrlInput = document.getElementById('brand-logo-url');
      const subtextInput = document.getElementById('brand-subtext');
      const previewBtn = document.getElementById('preview-brand-btn');
      const previewSub = document.getElementById('preview-brand-merchant-sub');
      const previewLogo = document.getElementById('preview-brand-merchant-logo');

      const color = colorHex ? colorHex.value : '#272757';
      const sub = subtextInput ? subtextInput.value : '';
      const logo = (logoUrlInput && logoUrlInput.value.trim()) ? logoUrlInput.value.trim() : (merchantBranding.logo_url || 'logo_cafe_don_arturo.png');

      if (previewBtn) previewBtn.style.backgroundColor = color;
      if (previewSub) previewSub.innerText = sub || 'Tostaduría de especialidad y café gourmet';
      if (previewLogo) previewLogo.src = logo;
    }

    function saveMerchantBranding() {
      const colorHex = document.getElementById('brand-color-hex').value.trim();
      const logoUrl = document.getElementById('brand-logo-url') ? document.getElementById('brand-logo-url').value.trim() : '';
      const subtext = document.getElementById('brand-subtext').value.trim();
      const customTerms = document.getElementById('brand-custom-terms').value.trim();
      const customPrivacy = document.getElementById('brand-custom-privacy').value.trim();

      merchantBranding = {
        primary_color: colorHex || '#272757',
        logo_url: logoUrl || 'logo_cafe_don_arturo.png',
        subtext: subtext,
        custom_terms: customTerms,
        custom_privacy: customPrivacy
      };

      try {
        localStorage.setItem('aurapay_merchant_branding', JSON.stringify(merchantBranding));
      } catch(e) {
        console.error('Error saving merchant branding:', e);
      }

      applyAdminBrandingTheme(merchantBranding.primary_color);
      updateMerchantLogoDisplay();
      showToast('Personalización Guardada', 'La identidad visual, logo y términos de tu comercio han sido actualizados.', 'success');
      addSystemLog('Configuración de Marca', 'seguridad', `Se actualizó la personalidad visual del comercio. Color primario: ${merchantBranding.primary_color}.`);
    }

    function resetMerchantBranding() {
      merchantBranding = { ...defaultBranding };
      try {
        localStorage.setItem('aurapay_merchant_branding', JSON.stringify(merchantBranding));
      } catch(e) {}
      initBrandingUI();
      applyAdminBrandingTheme(merchantBranding.primary_color);
      updateMerchantLogoDisplay();
      showToast('Marca Restablecida', 'Se han restaurado los valores e identidad por defecto de EthosPay.', 'info');
    }

    function loadDefaultLegalTemplates() {
      const termsInput = document.getElementById('brand-custom-terms');
      const privacyInput = document.getElementById('brand-custom-privacy');
      
      if (termsInput) {
        termsInput.value = `TÉRMINOS Y CONDICIONES DE VENTA\n\n1. ACEPTACIÓN Y PROCESAMIENTO: Toda compra realizada a través de esta pasarela constituye un acuerdo de venta final. Los pedidos son procesados de inmediato una vez autorizada la transacción.\n\n2. POLÍTICA DE DEVOLUCIONES Y CAMBIOS: Los cambios de producto o solicitudes de garantía se atienden dentro de los 30 días posteriores a la fecha de emisión del comprobante, presentando la factura original de compra.\n\n3. ENTREGAS Y SERVICIOS: La entrega de bienes y servicios está sujeta a la disponibilidad confirmada por el comercio.`;
      }
      if (privacyInput) {
        privacyInput.value = `AVISO DE PRIVACIDAD Y PROTECCIÓN DE DATOS\n\nSus datos personales son tratados con estricta confidencialidad bajo los estándares de seguridad de AuraPay. La información recopilada se utiliza exclusivamente para la gestión de su pedido, procesamiento del pago y envío de comprobantes digitales. La pasarela no almacena datos sensibles de tarjetas de crédito.`;
      }
      showToast('Plantilla Cargada', 'Se han insertado los términos y aviso de privacidad estándar.', 'info');
    }

    function switchSettingsSection(section) {
      const genBtn = document.getElementById('btn-set-general');
      const brandBtn = document.getElementById('btn-set-branding');
      const whBtn = document.getElementById('btn-set-webhooks');
      
      const genSec = document.getElementById('settings-section-general');
      const brandSec = document.getElementById('settings-section-branding');
      const whSec = document.getElementById('settings-section-webhooks');
      
      if (!genBtn || !whBtn || !genSec || !whSec) return;

      const activeBtnClass = 'w-full text-left px-4 py-2.5 rounded-lg text-xs font-semibold bg-gray-100 text-gray-950 flex items-center gap-2.5 transition-colors';
      const inactiveBtnClass = 'w-full text-left px-4 py-2.5 rounded-lg text-xs font-semibold text-gray-600 hover:bg-gray-50 flex items-center gap-2.5 transition-colors';

      genBtn.className = (section === 'general') ? activeBtnClass : inactiveBtnClass;
      if (brandBtn) brandBtn.className = (section === 'branding') ? activeBtnClass : inactiveBtnClass;
      whBtn.className = (section === 'webhooks') ? activeBtnClass : inactiveBtnClass;

      if (section === 'general') {
        genSec.classList.remove('hidden');
        if (brandSec) brandSec.classList.add('hidden');
        whSec.classList.add('hidden');
      } else if (section === 'branding') {
        if (brandSec) brandSec.classList.remove('hidden');
        genSec.classList.add('hidden');
        whSec.classList.add('hidden');
        initBrandingUI();
      } else {
        whSec.classList.remove('hidden');
        genSec.classList.add('hidden');
        if (brandSec) brandSec.classList.add('hidden');
        
        // Populate inputs with variables
        document.getElementById('webhook-enabled').checked = webhookSettings.enabled;
        document.getElementById('webhook-url').value = webhookSettings.url;
        document.getElementById('webhook-secret').value = webhookSettings.secret;
        toggleWebhookStatus(webhookSettings.enabled);
      }
    }

    function toggleWebhookStatus(isEnabled) {
      const fields = document.getElementById('webhook-fields');
      if (!fields) return;
      if (isEnabled) {
        fields.classList.remove('opacity-50', 'pointer-events-none');
      } else {
        fields.classList.add('opacity-50', 'pointer-events-none');
        document.getElementById('webhook-simulator-terminal').classList.add('hidden');
      }
    }

    function testWebhookConnection() {
      const url = document.getElementById('webhook-url').value;
      if (!url) {
        showToast('Falta Parámetro', 'Por favor ingresa una URL de endpoint válida para la prueba.', 'warning');
        return;
      }

      const term = document.getElementById('webhook-simulator-terminal');
      const simUrl = document.getElementById('web-sim-url');
      const simPayload = document.getElementById('web-sim-payload');
      const simCode = document.getElementById('web-sim-response-code');
      const simStatus = document.getElementById('web-sim-status');

      if (simUrl) simUrl.innerText = url;
      
      const payloadObj = {
        event: "webhook.test_ping",
        created_at: formatDate(new Date()) + " " + new Date().toTimeString().split(' ')[0],
        livemode: false,
        data: {
          ping: "pong",
          merchant_id: "mrc_aura_9921",
          status: "active"
        }
      };
      if (simPayload) simPayload.innerText = JSON.stringify(payloadObj, null, 2);

      // Simulating a successful POST ping
      if (term) term.classList.remove('hidden');
      if (simStatus) {
        simStatus.className = "px-2 py-0.5 bg-emerald-50 border border-emerald-200 text-aura-emeraldText text-[9px] font-semibold rounded";
        simStatus.innerText = "STATUS: 200 OK";
      }
      if (simCode) {
        simCode.className = "text-emerald-400 font-bold";
        simCode.innerText = "HTTP/1.1 200 OK";
      }

      showToast('Ping de Webhook Enviado', 'El servidor respondió con estado 200 OK.', 'success');
      addSystemLog('Test de Webhook', 'seguridad', `Se envió un ping de validación al webhook: ${url} (Respuesta: 200 OK)`);
    }

    function regenerateWebhookSecret() {
      const chars = 'abcdef0123456789';
      let rand = '';
      for (let i = 0; i < 24; i++) {
        rand += chars[Math.floor(Math.random() * chars.length)];
      }
      const newSecret = 'whsec_' + rand;
      document.getElementById('webhook-secret').value = newSecret;
      
      showToast('Secreto Regenerado', 'Se generó una nueva clave de firma de webhooks.', 'success');
      addSystemLog('Secreto Regenerado', 'seguridad', 'Se regeneró la clave de firma secreta de webhooks del Hosted Checkout.');
    }

    function saveWebhookSettings() {
      const isEnabled = document.getElementById('webhook-enabled').checked;
      const url = document.getElementById('webhook-url').value;
      const secret = document.getElementById('webhook-secret').value;
      
      const successChecked = document.getElementById('evt-success').checked;
      const failedChecked = document.getElementById('evt-failed').checked;
      const createdChecked = document.getElementById('evt-created').checked;
      const expiredChecked = document.getElementById('evt-expired').checked;
      
      const events = [];
      if (successChecked) events.push('checkout.payment_success');
      if (failedChecked) events.push('checkout.payment_failed');
      if (createdChecked) events.push('link.created');
      if (expiredChecked) events.push('link.expired');

      if (isEnabled && !url) {
        showToast('Error de Validación', 'Debes configurar una URL de endpoint si habilitas los webhooks.', 'warning');
        return;
      }

      webhookSettings.enabled = isEnabled;
      webhookSettings.url = url;
      webhookSettings.secret = secret;
      webhookSettings.events = events;

      showToast('Configuración Guardada', 'Se actualizaron los parámetros de webhooks del comercio.', 'success');
      addSystemLog('Webhook Modificado', 'seguridad', `Configuración de webhooks actualizada (Estado: ${isEnabled ? 'Habilitado' : 'Deshabilitado'}, URL: ${url || 'Ninguna'}, Eventos: ${events.join(', ')})`);
    }

    function showToast(title, msg, type = 'success') {
      const toast = document.getElementById('toast-notification');
      const tIcon = document.getElementById('toast-icon');
      const tTitle = document.getElementById('toast-title');
      const tMsg = document.getElementById('toast-msg');

      tTitle.innerText = title;
      tMsg.innerText = msg;

      if (type === 'success') {
        tIcon.className = 'w-6 h-6 rounded bg-aura-primary text-white flex items-center justify-center shadow-inner';
        tIcon.innerHTML = `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>`;
      } else {
        tIcon.className = 'w-6 h-6 rounded bg-aura-gold text-white flex items-center justify-center shadow-inner';
        tIcon.innerHTML = `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>`;
      }

      toast.classList.remove('hidden');
      setTimeout(() => {
        toast.classList.remove('-translate-y-8', 'opacity-0');
        toast.classList.add('translate-y-0', 'opacity-100');
      }, 50);

      setTimeout(() => {
        toast.classList.remove('translate-y-0', 'opacity-100');
        toast.classList.add('-translate-y-8', 'opacity-0');
        setTimeout(() => {
          toast.classList.add('hidden');
        }, 200);
      }, 3500);
    }

    // Sidebar navigation tabs switching responsively
    function switchTab(viewName) {
      try {
        const allowedViews = {
          admin: ['dashboard', 'links', 'transacciones', 'productos', 'informacion', 'usuarios', 'logs', 'ajustes'],
          cajero: ['dashboard', 'links', 'transacciones', 'productos'],
          operativo: ['dashboard', 'links', 'transacciones', 'productos']
        };

        const userRole = currentUser ? currentUser.role : 'cajero';
        const allowed = allowedViews[userRole] || ['dashboard', 'links', 'transacciones', 'productos'];
        if (!allowed.includes(viewName)) {
          showToast('Acceso Restringido', 'Tu rol no tiene acceso a esta sección.', 'warning');
          return;
        }

        const dashboardMenu = document.getElementById('menu-dashboard');
        const linksMenu = document.getElementById('menu-links');
        const transMenu = document.getElementById('menu-transacciones');
        const usersMenu = document.getElementById('menu-usuarios');
        const logsMenu = document.getElementById('menu-logs');
        const infoMenu = document.getElementById('menu-informacion');
        const prodMenu = document.getElementById('menu-productos');
        const ajustMenu = document.getElementById('menu-ajustes');
        
        const allMenus = [dashboardMenu, linksMenu, transMenu, usersMenu, logsMenu, infoMenu, prodMenu, ajustMenu];
        const inactiveClass = 'flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors text-gray-500 hover:text-gray-900 hover:bg-gray-50';
        const inactiveBadgeClass = 'flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md transition-colors text-gray-500 hover:text-gray-900 hover:bg-gray-50';
        const activeClass = 'flex items-center gap-3 px-3 py-2 text-sm font-semibold rounded-md transition-colors text-aura-goldText bg-amber-50';
        const activeBadgeClass = 'flex items-center justify-between px-3 py-2 text-sm font-semibold rounded-md transition-colors text-aura-goldText bg-amber-50';

        allMenus.forEach(el => {
          if (!el) return;
          const isHidden = el.classList.contains('hidden');
          // Preserve justify-between for menus that have badges
          const hasBadge = el.querySelector('span[id*="badge"]');
          el.className = hasBadge ? inactiveBadgeClass : inactiveClass;
          if (isHidden) el.classList.add('hidden');
          const svg = el.querySelector('svg');
          if (svg) svg.className = 'w-4 h-4 text-gray-400 group-hover:text-gray-500';
        });

        const dashboardView = document.getElementById('dashboard-view');
        const tableContainer = document.getElementById('table-container');
        const kpis = document.getElementById('kpi-container');
        const transView = document.getElementById('transacciones-view');
        const usuariosView = document.getElementById('usuarios-view');
        const logsView = document.getElementById('logs-view');
        const productosView = document.getElementById('productos-view');
        const ajustesView = document.getElementById('ajustes-view');
        
        const topbarCreateBtn = document.getElementById('btn-create-link');

        const informacionView = document.getElementById('informacion-view');

        // Hide all content containers first
        if (dashboardView) dashboardView.classList.add('hidden');
        if (transView) transView.classList.add('hidden');
        if (usuariosView) usuariosView.classList.add('hidden');
        if (logsView) logsView.classList.add('hidden');
        if (productosView) productosView.classList.add('hidden');
        if (ajustesView) ajustesView.classList.add('hidden');
        if (informacionView) informacionView.classList.add('hidden');

        function activateMenu(menu) {
          if (!menu) return;
          const isHidden = menu.classList.contains('hidden');
          const hasBadge = menu.querySelector('span[id*="badge"]');
          menu.className = hasBadge ? activeBadgeClass : activeClass;
          if (isHidden) menu.classList.add('hidden');
          const svg = menu.querySelector('svg');
          if (svg) svg.className = 'w-4 h-4 text-aura-primary';
        }

        if (viewName === 'dashboard') {
          activateMenu(dashboardMenu);
          if (dashboardView) dashboardView.classList.remove('hidden');
          if (tableContainer) tableContainer.classList.remove('hidden');
          if (kpis) kpis.classList.remove('hidden');
          if (topbarCreateBtn) topbarCreateBtn.classList.remove('hidden');
        } else if (viewName === 'links') {
          activateMenu(linksMenu);
          if (dashboardView) dashboardView.classList.remove('hidden');
          if (tableContainer) tableContainer.classList.remove('hidden');
          if (kpis) kpis.classList.add('hidden');
          if (topbarCreateBtn) topbarCreateBtn.classList.remove('hidden');
        } else if (viewName === 'transacciones') {
          activateMenu(transMenu);
          if (transView) transView.classList.remove('hidden');
          if (topbarCreateBtn) topbarCreateBtn.classList.add('hidden');
          renderTransactionsReport();
        } else if (viewName === 'usuarios') {
          activateMenu(usersMenu);
          if (usuariosView) usuariosView.classList.remove('hidden');
          if (topbarCreateBtn) topbarCreateBtn.classList.add('hidden');
          renderUsersTable();
        } else if (viewName === 'logs') {
          activateMenu(logsMenu);
          if (logsView) logsView.classList.remove('hidden');
          if (topbarCreateBtn) topbarCreateBtn.classList.add('hidden');
          renderLogsTable();
        } else if (viewName === 'informacion') {
          activateMenu(infoMenu);
          if (informacionView) informacionView.classList.remove('hidden');
          if (topbarCreateBtn) topbarCreateBtn.classList.add('hidden');
          renderInformacionGeneral();
        } else if (viewName === 'productos') {
          activateMenu(prodMenu);
          if (productosView) productosView.classList.remove('hidden');
          if (topbarCreateBtn) topbarCreateBtn.classList.add('hidden');
          renderProductsCatalog();
        } else if (viewName === 'ajustes') {
          activateMenu(ajustMenu);
          if (ajustesView) ajustesView.classList.remove('hidden');
          if (topbarCreateBtn) topbarCreateBtn.classList.add('hidden');
          switchSettingsSection('general');
        }
        
        closeSidebarMobile();
      } catch (err) {
        console.error('switchTab error:', err);
      }
    }

    // Dismiss notifications list on external click
    document.addEventListener('click', (e) => {
      const notifMenu = document.getElementById('notifications-menu');
      const notifBtn = notifMenu.previousElementSibling;
      if (!notifMenu.classList.contains('hidden') && !notifMenu.contains(e.target) && !notifBtn.contains(e.target)) {
        notifMenu.classList.remove('opacity-100', 'scale-100');
        notifMenu.classList.add('opacity-0', 'scale-95');
        setTimeout(() => {
          notifMenu.classList.add('hidden');
        }, 200);
      }
    });

    // Listen to localStorage updates to sync payment states in real time
    window.addEventListener('storage', (e) => {
      if (e.key === 'aurapay_transactions' || e.key === 'aurapay_transactions') {
        try {
          const updatedTxs = JSON.parse(e.newValue);
          if (updatedTxs && Array.isArray(updatedTxs)) {
            // Find if any transaction has been paid that wasn't paid before
            updatedTxs.forEach(newTx => {
              const oldTx = transactions.find(t => t.transaction_id === newTx.transaction_id);
              if (oldTx && oldTx.status !== 'PAID' && newTx.status === 'PAID') {
                // Trigger notification and logs in index.html
                addNotification('Pago Confirmado', `El cliente ${newTx.client} pagó ${formatCurrency(newTx.amount)} por ${newTx.type}`, 'payment');
                addSystemLog('Pago Recibido', 'transaccion', `Cobro ${newTx.transaction_id} liquidado exitosamente por ${formatCurrency(newTx.amount)} a través de ${newTx.type}. Cliente: ${newTx.client}`);
                
                // Webhook trigger if enabled
                if (webhookSettings.enabled && webhookSettings.events.includes('checkout.payment_success')) {
                  addSystemLog('Webhook Despachado', 'seguridad', `POST webhook enviado a ${webhookSettings.url} para evento checkout.payment_success (Respuesta: 200 OK)`);
                  setTimeout(() => {
                    showToast('Webhook Despachado', `Notificación de pago exitoso enviada a ${webhookSettings.url}`, 'success');
                  }, 800);
                }
                
                showToast('Pago Confirmado', `El enlace ${newTx.transaction_id} ha sido pagado exitosamente.`);
              }
            });

            transactions = updatedTxs;
            calculateKPIs();
            renderTable();
            if (selectedTransaction) {
              const updated = transactions.find(t => t.transaction_id === selectedTransaction.transaction_id);
              if (updated) {
                selectedTransaction = updated;
                // Update details drawer UI
                document.getElementById('detail-token').innerText = selectedTransaction.token || 'No se ha registrado tarjeta/transferencia para el pago';
                updateTimelineUI(selectedTransaction);
                setupSimulatorUI(selectedTransaction);
                
                // Update drawer tab pending badge
                const simBadge = document.getElementById('drawer-tab-pending-badge');
                if (selectedTransaction.status === 'PENDING') {
                  simBadge.classList.remove('hidden');
                } else {
                  simBadge.classList.add('hidden');
                }
              }
            }
          }
        } catch(err) {
          console.error('Error handling storage update:', err);
        }
      }
    });

    function openClientCheckoutPage() {
      if (!selectedTransaction) return;
      const t = selectedTransaction;
      
      let imgPreset = t.image_preset || 'cafe';
      if (!t.image_preset) {
        if (t.merchant.name.toLowerCase().includes('tecno')) {
          imgPreset = 'laptop';
        } else if (t.merchant.name.toLowerCase().includes('sol') || t.merchant.name.toLowerCase().includes('agro')) {
          imgPreset = 'agro';
        } else if (t.merchant.name.toLowerCase().includes('tools')) {
          imgPreset = 'package';
        }
      }

      // Check allowed methods fallback
      let methodsStr = t.allowed_methods ? t.allowed_methods.join(',') : 'card,virtual,cash,cuik,wallet';

      const params = new URLSearchParams({
        id: t.transaction_id,
        amount: t.amount,
        client: t.client,
        concept: t.product.title,
        desc: t.product.description || '',
        merchant: t.merchant.name,
        subtext: t.merchant.subtext,
        phone: t.phone,
        img: imgPreset,
        methods: methodsStr
      });
      window.open(`aurapay-checkout.html?${params.toString()}`, '_blank');
    }

    // ================= THEME TOGGLE (LIGHT / DARK) =================
    (function initThemeToggle(){
      const KEY = 'aurapay-admin-theme';
      const MOON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/></svg>';
      const SUN  = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
      
      function currentTheme(){
        return document.documentElement.getAttribute('data-theme') || 'light';
      }
      
      function syncIcon(){
        const b = document.getElementById('theme-toggle');
        if (b) {
          b.innerHTML = currentTheme() === 'dark' ? SUN : MOON;
          b.className = currentTheme() === 'dark' 
            ? 'p-1.5 bg-gray-800 text-gray-300 hover:text-white rounded-md transition-colors focus:outline-none relative'
            : 'p-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-md transition-colors focus:outline-none relative';
        }
      }
      
      function apply(theme){
        document.documentElement.setAttribute('data-theme', theme);
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        syncIcon();
      }
      
      window.toggleTheme = function(){
        const next = currentTheme() === 'dark' ? 'light' : 'dark';
        try {
          localStorage.setItem(KEY, next);
        } catch(e) {}
        apply(next);
      };

      // Set initial icon
      setTimeout(syncIcon, 10);
      
      try {
        const mq = window.matchMedia('(prefers-color-scheme: dark)');
        const onChange = function(e){
          let s = null;
          try {
            s = localStorage.getItem(KEY);
          } catch(err) {}
          if (!s) apply(e.matches ? 'dark' : 'light');
        };
        if (mq.addEventListener) mq.addEventListener('change', onChange);
      } catch(err) {}
    })();

    function initInputFormatters() {
      const phoneInput = document.getElementById('link-phone');
      if (phoneInput) {
        phoneInput.addEventListener('input', (e) => {
          // Remove all non-digit characters
          let value = e.target.value.replace(/\D/g, '');
          
          // Limit to 8 digits
          if (value.length > 8) {
            value = value.substring(0, 8);
          }
          
          // Format as XXXX-XXXX
          if (value.length > 4) {
            e.target.value = value.substring(0, 4) + '-' + value.substring(4);
          } else {
            e.target.value = value;
          }
        });
      }
    }

    // ================= INFORMACIÓN GENERAL =================
    function renderInformacionGeneral() {
      const paid = transactions.filter(t => t.status === 'PAID');
      const totalVendido = paid.reduce((s, t) => s + t.amount, 0);

      // Card contado detection
      const isContadoTarjeta = t => {
        const mod = (t.payment_modality || '').toLowerCase();
        return (mod.includes('tarjeta') || mod.includes('un clic')) && mod.includes('contado');
      };
      // Cuotas detection
      const isCuotasTarjeta = t => {
        const mod = (t.payment_modality || '').toLowerCase();
        return (mod.includes('tarjeta') || mod.includes('un clic')) && mod.includes('cuotas');
      };
      const isEfectivo = t => {
        const mod = (t.payment_modality || '').toLowerCase();
        return mod.includes('banca') || mod.includes('caja') || mod.includes('conversacional') || mod.includes('efectivo') || mod.includes('cuik');
      };

      const contadoTxs  = paid.filter(isContadoTarjeta);
      const cuotasTxs   = paid.filter(isCuotasTarjeta);
      const efectivoTxs = paid.filter(isEfectivo);

      const totalContado  = contadoTxs.reduce((s, t) => s + t.amount, 0);
      const totalCuotas   = cuotasTxs.reduce((s, t) => s + t.amount, 0);
      const totalEfectivo = efectivoTxs.reduce((s, t) => s + t.amount, 0);

      // Commission calculation based on actual net received per transaction
      const comisionContado = contadoTxs.reduce((s, t) => {
        const net = calculateNetReceived(t);
        return s + Math.max(0, t.amount - net);
      }, 0);

      const comisionCuotas = cuotasTxs.reduce((s, t) => {
        const net = calculateNetReceived(t);
        return s + Math.max(0, t.amount - net);
      }, 0);

      const totalComision = comisionContado + comisionCuotas;
      const ticketPromedio = paid.length ? totalVendido / paid.length : 0;

      // --- KPI cards ---
      const kpiGrid = document.getElementById('info-kpi-grid');
      if (kpiGrid) {
        const kpis = [
          { label: 'Total Vendido', value: formatCurrency(totalVendido), sub: `${paid.length} cobros pagados`, color: 'text-aura-goldText', bg: 'bg-amber-50' },
          { label: 'Comisión Estimada', value: formatCurrency(totalComision), sub: 'Contado + interés cuotas', color: 'text-aura-goldText', bg: 'bg-amber-50' },
          { label: 'Cobros en Efectivo', value: formatCurrency(totalEfectivo), sub: `${efectivoTxs.length} transacciones`, color: 'text-slate-700', bg: 'bg-slate-100' },
          { label: 'Ticket Promedio', value: formatCurrency(ticketPromedio), sub: 'Por cobro pagado', color: 'text-slate-700', bg: 'bg-slate-100' },
        ];
        kpiGrid.innerHTML = kpis.map(k => `
          <div class="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
            <div class="w-8 h-8 ${k.bg} rounded-lg flex items-center justify-center mb-3">
              <span class="text-xs font-bold ${k.color}">Q</span>
            </div>
            <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wider">${k.label}</p>
            <p class="text-lg font-bold ${k.color} mt-1">${k.value}</p>
            <p class="text-[10px] text-gray-400 mt-0.5">${k.sub}</p>
          </div>
        `).join('');
      }

      // --- Método breakdown ---
      const breakdownEl = document.getElementById('info-metodo-breakdown');
      if (breakdownEl) {
        const methods = [
          { label: 'Tarjeta — Contado', total: totalContado, count: contadoTxs.length, color: 'bg-aura-primary' },
          { label: 'Tarjeta — Cuotas',  total: totalCuotas,  count: cuotasTxs.length,  color: 'bg-blue-500' },
          { label: 'Banca / Efectivo / Billeteras',  total: totalEfectivo, count: efectivoTxs.length, color: 'bg-emerald-500' },
        ];
        breakdownEl.innerHTML = methods.map(m => {
          const pct = totalVendido > 0 ? ((m.total / totalVendido) * 100).toFixed(1) : '0.0';
          return `
            <div>
              <div class="flex justify-between text-xs mb-1">
                <span class="font-medium text-gray-700">${m.label}</span>
                <span class="text-gray-500">${formatCurrency(m.total)} <span class="text-gray-400">(${pct}%) · ${m.count} cobros</span></span>
              </div>
              <div class="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div class="${m.color} h-2 rounded-full transition-all duration-700" style="width:${pct}%"></div>
              </div>
            </div>
          `;
        }).join('');
      }
    }

    // App Initialization
    window.onload = () => {
      loadMerchantBranding();
      renderTable();
      renderNotificationsUI();
      initInputFormatters();
      populateLinkProductDropdown();
      
      const inputEl = document.getElementById('exchange-rate-usd');
      if (inputEl) inputEl.value = exchange_rate_usd_to_gtq.toFixed(2);
    };