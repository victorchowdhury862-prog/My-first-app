import { EETopicId } from '../types';

export interface EETopicDefinition {
  id: EETopicId;
  label: string;
  shortLabel: string;
  tagline: string;
  iconName: string;
  color: string;
  badgeBg: string;
  badgeBorder: string;
  badgeText: string;
  description: string;
  coreConcepts: string[];
  mobileAppFeatures: string[];
  targetBuyers: string[];
  fiverrSearchKeywords: string[];
  recommendedColorTheory: string;
  gigIds: string[];
  calculator: {
    title: string;
    description: string;
    formulaDisplay: string;
    type: 'transformer' | 'motor' | 'powerFactor' | 'solar' | 'voltageDrop' | 'ledResistor';
  };
}

export const EE_TOPICS_LIST: EETopicDefinition[] = [
  {
    id: 'power-systems',
    label: 'Power Systems & Substation Grid',
    shortLabel: 'Power Systems',
    tagline: 'High-voltage grid transmission, substation telemetry, SCADA HMI, and transformer monitoring apps.',
    iconName: 'Zap',
    color: '#F59E0B',
    badgeBg: 'bg-amber-500/10',
    badgeBorder: 'border-amber-500/30',
    badgeText: 'text-amber-400',
    description: 'Apps built for electrical utilities, grid dispatchers, and high-voltage transmission engineers to monitor megawatt generation, transformer temperatures, and circuit breaker trip sequences in real time.',
    coreConcepts: [
      'Substation SCADA & RTU Telemetry',
      '3-Phase Transmission Line Load Flow',
      'Transformer Winding Thermal Diagnostics',
      'Overcurrent & Differential Relay Trip Alarms',
      'High-Voltage Switchgear Status & Busbars'
    ],
    mobileAppFeatures: [
      'Live megawatt & kilovolt grid line diagram',
      'Substation geographic map with live alerts',
      'Transformer load capacity & oil temperature gauges',
      'Automated fault isolation & switching logbook'
    ],
    targetBuyers: [
      'Regional electric utility operators',
      'High-voltage substation EPC contractors',
      'Smart grid IoT telemetry startups',
      'Industrial plant power supervisors'
    ],
    fiverrSearchKeywords: [
      'scada app ui',
      'power grid mobile app',
      'substation monitoring ui',
      'electrical telemetry dashboard'
    ],
    recommendedColorTheory: 'Graphite carbon background with electric amber alarms (#F59E0B) and telemetry cyan traces (#06B6D4) for instant contrast at thumbnail scale.',
    gigIds: ['gig-scada-power-grid'],
    calculator: {
      title: '3-Phase Transformer Voltage & Turns Ratio',
      description: 'Calculate secondary voltage and turn ratio based on primary parameters.',
      formulaDisplay: 'V_secondary = V_primary × (N_secondary / N_primary)',
      type: 'transformer'
    }
  },
  {
    id: 'plc-automation',
    label: 'Industrial PLC & Motor Drives',
    shortLabel: 'PLC & Automation',
    tagline: 'Programmable logic controllers, VFD inverter drives, ladder logic, and industrial mechatronics apps.',
    iconName: 'Cpu',
    color: '#0EA5E9',
    badgeBg: 'bg-sky-500/10',
    badgeBorder: 'border-sky-500/30',
    badgeText: 'text-sky-400',
    description: 'Designed for factory automation engineers, roboticists, and plant managers needing handheld diagnostics for PLC memory bits, variable frequency drives (VFDs), motor tachometers, and safety interlocks.',
    coreConcepts: [
      'Ladder Logic & Functional Block Diagnostics',
      'Variable Frequency Drive (VFD) Inverters',
      '3-Phase Induction Motor RPM & Torque Curves',
      'Modbus TCP, Profinet & EtherNet/IP Telemetry',
      'Emergency Stop & Safety Relay Interlocks'
    ],
    mobileAppFeatures: [
      'Real-time RPM speedometer & hertz dial',
      'Dynamic motor torque & temperature graph',
      'Ladder logic rung status live view',
      'One-tap motor run/stop & frequency slider'
    ],
    targetBuyers: [
      'Industrial automation integrators',
      'German & US manufacturing facilities',
      'Robotics & assembly line builders',
      'Water treatment & pump station operators'
    ],
    fiverrSearchKeywords: [
      'plc app ui ux',
      'vfd motor drive app',
      'industrial hmi mobile app',
      'automation dashboard figma'
    ],
    recommendedColorTheory: 'High-contrast factory slate (#111827) paired with electric cyan (#0EA5E9) and ISO hazard orange (#F97316).',
    gigIds: ['gig-plc-motor-control'],
    calculator: {
      title: 'Induction Motor Synchronous Speed & Slip',
      description: 'Compute theoretical synchronous speed and real-world rotor slip percentage.',
      formulaDisplay: 'Ns = (120 × f) / P  |  Slip % = ((Ns - N) / Ns) × 100',
      type: 'motor'
    }
  },
  {
    id: 'power-electronics',
    label: 'Power Electronics & Power Quality',
    shortLabel: 'Power Electronics',
    tagline: '3-Phase waveform analyzers, harmonics distortion (THD), and power factor correction apps.',
    iconName: 'Activity',
    color: '#EF4444',
    badgeBg: 'bg-rose-500/10',
    badgeBorder: 'border-rose-500/30',
    badgeText: 'text-rose-400',
    description: 'Precision test & measurement apps designed for power auditors, electronics lab technicians, and power quality consultants monitoring 3-phase sine waves, voltage sags/swells, and harmonics up to the 50th order.',
    coreConcepts: [
      '3-Phase Sinusoidal Waveforms (L1, L2, L3)',
      'Total Harmonic Distortion (THD-V & THD-I)',
      'Active (kW), Reactive (kVAR) & Apparent (kVA) Power',
      'Power Factor (cos φ) & Capacitor Bank Optimization',
      'DC-to-AC Inverters & Silicon Carbide (SiC) MOSFETs'
    ],
    mobileAppFeatures: [
      'Live 3-phase oscilloscope sweep view',
      'Harmonic bar spectrum analyzer up to 50th order',
      'Real-time cos-phi power factor needle gauge',
      'Capacitor bank rating recommendation engine'
    ],
    targetBuyers: [
      'Power quality audit consultants',
      'Industrial power electronics developers',
      'Test & measurement instrument vendors',
      'Data center facility electrical teams'
    ],
    fiverrSearchKeywords: [
      'power quality analyzer app',
      'harmonics analyzer ui',
      '3 phase electrical app',
      'power factor correction app'
    ],
    recommendedColorTheory: 'Oscilloscope deep navy (#0B0F19) with standardized phase colors: L1 Red (#EF4444), L2 Amber (#F59E0B), L3 Blue (#3B82F6).',
    gigIds: ['gig-three-phase-power'],
    calculator: {
      title: '3-Phase Power & Power Factor (cos φ)',
      description: 'Calculate real power in kW, reactive power in kVAR, and total apparent power in kVA.',
      formulaDisplay: 'P = √3 × V_L × I_L × cos(φ)  |  S = √3 × V_L × I_L',
      type: 'powerFactor'
    }
  },
  {
    id: 'solar-ev',
    label: 'CleanTech, Solar & EV Mobility',
    shortLabel: 'Solar & EV Mobility',
    tagline: 'Solar PV rooftop yield calculators, MPPT inverter telemetry, and EV supercharging apps.',
    iconName: 'Sun',
    color: '#22C55E',
    badgeBg: 'bg-emerald-500/10',
    badgeBorder: 'border-emerald-500/30',
    badgeText: 'text-emerald-400',
    description: 'High-growth CleanTech apps built for solar installers, EV fleet managers, and renewable energy startups tracking photovoltaic generation, battery state-of-charge (BMS), and kilowatt flow rates.',
    coreConcepts: [
      'Photovoltaic (PV) Rooftop Azimuth & Tilt Sizing',
      'Solar String Inverter & Maximum Power Point Tracking (MPPT)',
      'Lithium Iron Phosphate (LFP) Battery Management Systems (BMS)',
      'DC Fast Charging (CCS / NACS) Kilowatt Telemetry',
      'Smart Grid Net Metering & Energy Storage (ESS)'
    ],
    mobileAppFeatures: [
      'Live solar generation dial with battery charge status',
      'Rooftop tilt angle calculator with irradiance estimate',
      'EV supercharger map with live plug availability',
      'Dynamic kilowatt flow animation (Solar → Battery → Home)'
    ],
    targetBuyers: [
      'Solar installation & EPC contractors',
      'EV charging station network operators',
      'CleanTech and home energy storage startups',
      'Fleet logistics & green mobility directors'
    ],
    fiverrSearchKeywords: [
      'solar app ui ux',
      'ev charging station app',
      'solar calculator mobile app',
      'bms battery app figma'
    ],
    recommendedColorTheory: 'Eco-electric neon green (#22C55E) blended with solar sun gold (#F59E0B) over midnight space indigo (#0F172A).',
    gigIds: ['gig-solar-smart-electrical', 'gig-ev-charging', 'gig-solar-rooftop-calc'],
    calculator: {
      title: 'Solar PV Daily Energy Yield & Battery Sizing',
      description: 'Estimate daily kilowatt-hours produced based on solar panel capacity and peak sun hours.',
      formulaDisplay: 'E_daily = P_array (kW) × Peak Sun Hours × System Efficiency (η)',
      type: 'solar'
    }
  },
  {
    id: 'cad-circuits',
    label: 'Circuit CAD, Schematics & Calculations',
    shortLabel: 'CAD & Schematics',
    tagline: 'Electrical blueprint viewers, wire sizing calculators, voltage drop, and circuit schematics.',
    iconName: 'FileCode',
    color: '#38BDF8',
    badgeBg: 'bg-sky-500/10',
    badgeBorder: 'border-sky-500/30',
    badgeText: 'text-sky-300',
    description: 'Mobile and tablet engineering tools for consulting engineers, electrical contractors, and CAD drafters to verify conductor sizes, check National Electrical Code (NEC) ampacities, and review IEEE schematics in the field.',
    coreConcepts: [
      'IEEE 315 & IEC Standard Schematic Symbols',
      'Ohm’s Law & Kirchhoff’s Current/Voltage Laws (KCL/KVL)',
      'Conductor Ampacity & Permissible Voltage Drop (NEC 3%)',
      'Multi-Layer PCB Layout & Netlist Routing',
      'Short Circuit Current Ratings (SCCR) & Breaker Trip Curves'
    ],
    mobileAppFeatures: [
      'Pinch-to-zoom multi-layer electrical blueprint reader',
      'One-tap voltage drop & conductor gauge calculator',
      'Component footprint & pinout reference library',
      'Exportable compliance reports in PDF/CSV format'
    ],
    targetBuyers: [
      'Licensed professional electrical engineers (PE)',
      'Commercial electrical contractors',
      'Engineering software startups & CAD toolmakers',
      'Technical university electrical departments'
    ],
    fiverrSearchKeywords: [
      'electrical cad app',
      'voltage drop calculator app',
      'circuit schematic app ui',
      'wire sizing calculator mobile'
    ],
    recommendedColorTheory: 'Engineering blueprint cyan (#38BDF8) and technical amber (#F59E0B) on deep dark navy (#0F172A).',
    gigIds: ['gig-electric-cad-schematic', 'gig-electrical-calculator'],
    calculator: {
      title: 'Conductor Voltage Drop & Wire Sizing (Single Phase)',
      description: 'Determine voltage drop percentage across copper or aluminum conductors.',
      formulaDisplay: 'ΔV = (2 × K × I × L) / CM  |  % Drop = (ΔV / V_nominal) × 100',
      type: 'voltageDrop'
    }
  },
  {
    id: 'embedded-iot',
    label: 'Embedded Systems & Microcontroller IoT',
    shortLabel: 'Embedded & IoT',
    tagline: 'ESP32, Arduino, ARM Cortex, GPIO pinout reference, and BLE/MQTT sensor telemetry apps.',
    iconName: 'CircuitBoard',
    color: '#A855F7',
    badgeBg: 'bg-purple-500/10',
    badgeBorder: 'border-purple-500/30',
    badgeText: 'text-purple-400',
    description: 'For hardware creators, firmware developers, and IoT product startups needing custom mobile interfaces to communicate with microcontrollers over Bluetooth Low Energy (BLE), Wi-Fi, and MQTT.',
    coreConcepts: [
      'Microcontroller Pinout Maps (ESP32, STM32, Arduino, RP2040)',
      'GPIO, PWM, I2C, SPI & UART Peripheral Control',
      'Real-Time Analog-to-Digital (ADC) Sensor Streams',
      'Bluetooth Low Energy (BLE) GATT Characteristic Tuning',
      'Over-The-Air (OTA) Firmware Flashing Interfaces'
    ],
    mobileAppFeatures: [
      'Interactive pinout map with live GPIO state toggles',
      'Live oscilloscope sensor graph over Bluetooth BLE',
      'Terminal console with hex/ASCII serial logs',
      'Configurable IoT dashboard widgets (sliders, gauges, graphs)'
    ],
    targetBuyers: [
      'IoT hardware startups & Kickstarter creators',
      'Embedded firmware engineering consultancies',
      'Consumer smart hardware product designers',
      'Maker labs and university robotics clubs'
    ],
    fiverrSearchKeywords: [
      'iot mobile app ui',
      'esp32 bluetooth app',
      'arduino app design figma',
      'sensor telemetry mobile app'
    ],
    recommendedColorTheory: 'Electric neon purple (#A855F7) paired with cyber teal (#14B8A6) against matte graphite black (#0A0E17).',
    gigIds: ['gig-embedded-iot'],
    calculator: {
      title: 'LED Current Limiting Resistor & Power Dissipation',
      description: 'Calculate required resistance and resistor wattage for microcontroller outputs.',
      formulaDisplay: 'R = (V_source - V_forward) / I_forward  |  P = I² × R',
      type: 'ledResistor'
    }
  },
  {
    id: 'electrician-service',
    label: 'Electrician Booking & Field Services',
    shortLabel: 'Field Services',
    tagline: 'On-demand electrician dispatch, service booking, circuit breaker mapping, and quote estimation apps.',
    iconName: 'Wrench',
    color: '#3B82F6',
    badgeBg: 'bg-blue-500/10',
    badgeBorder: 'border-blue-500/30',
    badgeText: 'text-blue-400',
    description: 'Built for trade contractors, local electricians, and home service marketplace platforms connecting homeowners with licensed technicians for panel upgrades, emergency repairs, and EV charger installations.',
    coreConcepts: [
      'Live Dispatch Scheduling & GPS Technician Tracking',
      'Residential Electrical Panel Circuit Breaker Mapping',
      'Instant Emergency Repair Quote Calculator',
      'Pre-Job Electrical Safety Inspection Checklists',
      'Stripe & Square Field Invoicing Integration'
    ],
    mobileAppFeatures: [
      'Homeowner instant electrician booking workflow',
      'Digital panel map identifying tripped breaker locations',
      'Technician job schedule with turn-by-turn routing',
      'Photo upload for wire fault diagnosis before arrival'
    ],
    targetBuyers: [
      'Independent electrical contractors',
      'Home service franchisors (Mr. Electric, etc.)',
      'Local on-demand trades marketplace platforms',
      'Facility maintenance service companies'
    ],
    fiverrSearchKeywords: [
      'electrician booking app',
      'electrical service app ui',
      'handyman trades app figma',
      'home service app design'
    ],
    recommendedColorTheory: 'Electric voltage blue (#2563EB) and spark amber (#F59E0B) with sanitary white elements to inspire trust.',
    gigIds: ['gig-electrician-service'],
    calculator: {
      title: 'Residential Service Load Calculator (NEC)',
      description: 'Quick estimation of residential general lighting and appliance volt-amperes.',
      formulaDisplay: 'General Load (VA) = Floor Area (sq ft) × 3 VA/sq ft + Small Appliance (3,000 VA)',
      type: 'voltageDrop'
    }
  }
];
