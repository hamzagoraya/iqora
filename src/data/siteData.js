import {
  Layers, Sofa, LayoutGrid, Frame, BedDouble, Armchair, ShieldCheck, Blinds
} from 'lucide-react';

export const BRAND = {
  name: 'IQORA',
  fullName: 'IQORA Cleaning Services',
  tagline: 'Carpet, Upholstery & Tile Cleaning in North Hollywood and the San Fernando Valley',
  phone: '+1 (818) 555-0147',
  phoneHref: 'tel:+18185550147',
  email: 'info@iqoracleaningservices.com',
  supportEmail: 'support@iqoracleaningservices.com',
  address: 'North Hollywood, CA 91601, United States',
  hours: {
    weekdays: '8:00 AM – 7:00 PM',
    saturday: '9:00 AM – 5:00 PM',
    sunday: 'Closed',
  },
  rating: '4.9',
  reviewCount: '320',
  legalName: 'IQORA Cleaning Services',
  footerBlurb: 'IQORA is a family-run cleaning company serving North Hollywood and the San Fernando Valley with expert carpet, upholstery, and tile & grout cleaning — eco-friendly products, honest pricing, and a satisfaction guarantee on every job.',
};

export const STATS = {
  projectsCompleted: '990+',
  squareFeetCleaned: '1.2M+',
  customerSatisfaction: '98%',
  hoursSpentCleaning: '18K+',
};

export const CITIES = [
  {
    slug: 'north-hollywood',
    name: 'North Hollywood',
    isParent: true,
    note: 'Our home base. From NoHo Arts District apartments to family homes near Valley Plaza, we clean carpets, upholstery, and tile across the neighborhood every week.',
  },
  {
    slug: 'burbank',
    name: 'Burbank',
    note: 'From Media District studios to Magnolia Park bungalows, Burbank homes and offices trust IQORA for fast-drying, low-moisture cleaning.',
  },
  {
    slug: 'glendale',
    name: 'Glendale',
    note: 'Serving Glendale families and businesses — from the Americana corridor to the Verdugo Woodlands — with eco-certified cleaning products.',
  },
  {
    slug: 'sherman-oaks',
    name: 'Sherman Oaks',
    note: 'Busy Sherman Oaks households count on our same-week carpet and rug cleaning with pet-safe, fragrance-free options.',
  },
  {
    slug: 'van-nuys',
    name: 'Van Nuys',
    note: 'Van Nuys apartments, offices, and storefronts rely on our flexible scheduling, including evenings and weekends.',
  },
  {
    slug: 'encino',
    name: 'Encino',
    note: 'Encino’s family homes and higher-end interiors receive white-glove care, from fine upholstery to delicate area rugs.',
  },
  {
    slug: 'studio-city',
    name: 'Studio City',
    note: 'Studio City homes and production offices book us for discreet, quiet, after-hours cleaning that never interrupts a shoot.',
  },
  {
    slug: 'valley-village',
    name: 'Valley Village',
    note: 'A quiet residential favorite — Valley Village neighbors refer us for our careful, detail-obsessed technicians.',
  },
  {
    slug: 'toluca-lake',
    name: 'Toluca Lake',
    note: 'Lakeside estates and classic Toluca Lake homes get museum-grade fabric and carpet treatment on every visit.',
  },
  {
    slug: 'pasadena',
    name: 'Pasadena',
    note: 'From Old Pasadena businesses to Craftsman-era homes, we use heritage-safe methods on every floor and fabric.',
  },
];

export const SERVICES = [
  {
    id: 'carpet-cleaning',
    name: 'Carpet Cleaning',
    shortName: 'Carpet',
    icon: Layers,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop',
    badge: 'Most Popular Service',
    tagline: 'Deep-steam carpet cleaning that lifts years of dirt in one visit',
    intro: 'IQORA brings professional hot-water-extraction carpet cleaning to {city} homes and businesses. Our truck-mounted equipment rinses embedded dirt, dust mites, and allergens all the way to the backing — something store-rented machines simply can’t do — while our eco-certified solutions are safe for kids and pets.',
    introSecondary: 'Whether it’s a high-traffic hallway in a {city} family home or a full office refresh, most carpets are dry and back in service within 4–6 hours.',
    chips: ['Eco-certified products', '4–6 hr dry time', 'Certified technicians', '100% satisfaction guarantee'],
    benefits: [
      { title: 'Deep to the backing', text: 'Truck-mounted hot-water extraction flushes out dirt, allergens, and bacteria that vacuuming leaves behind.' },
      { title: 'Pet stain & odor removal', text: 'Enzyme treatments break down urine, dander, and odors at the molecular level — not just a cover-up.' },
      { title: 'Kid & pet safe', text: 'Green Seal–certified, fragrance-free solutions that leave no sticky residue or harsh fumes.' },
      { title: 'Fast-drying process', text: 'Powerful extraction and air movers mean most carpets dry in 4–6 hours, not 1–2 days.' },
      { title: 'Stain protection included', text: 'Optional carpet protector application keeps spills beading on the surface instead of soaking in.' },
      { title: 'Satisfaction guarantee', text: 'If a spot returns within 7 days, we come back and re-treat it at no charge.' },
    ],
    process: [
      { title: 'Inspection & pre-treatment', text: 'We identify fibers, map stains, and pre-spray traffic areas with an eco-certified solution.' },
      { title: 'Agitation & spot treatment', text: 'A soft-bristle brush works the pre-spray into the pile while tough spots get targeted enzyme treatment.' },
      { title: 'Hot-water extraction', text: 'Truck-mounted equipment rinses at 200°F+ and extracts up to 95% of the moisture along with the dirt.' },
      { title: 'Grooming & rapid dry', text: 'We groom the pile for a uniform finish and set up air movers so carpets dry in hours.' },
    ],
    priceSummary: 'From $89 per room',
    pricingRows: [
      { item: 'Per room (up to 150 sq ft)', price: '$89 – $139' },
      { item: 'Living room / large room', price: '$99 – $149' },
      { item: 'Hallway', price: '$25 – $40' },
      { item: 'Stairs', price: '$5 – $8 per step' },
      { item: 'Pet urine treatment', price: '$30 – $60 per area' },
      { item: 'Carpet protector (optional)', price: '$20 – $35 per room' },
    ],
    faqs: [
      { q: 'How long will my carpets take to dry?', a: 'Most carpets dry in 4–6 hours with good airflow. We set up air movers after every job, and you can walk on the carpet in clean socks immediately.' },
      { q: 'How often should carpets be professionally cleaned?', a: 'Most {city} households benefit from cleaning every 6–12 months. Homes with pets, kids, or allergy sufferers should aim for every 6 months.' },
      { q: 'Can you remove old pet stains and odors?', a: 'In most cases, yes. Our enzyme treatments break down urine crystals that cause odor. Severe saturation may need pad-level treatment, which we assess during inspection.' },
      { q: 'Are your cleaning products safe for children and pets?', a: 'Yes. We use Green Seal–certified, fragrance-free solutions that rinse out completely, leaving no residue behind.' },
      { q: 'Do you move furniture?', a: 'We move light furniture like chairs and coffee tables at no charge. Larger pieces (sofas, beds, dressers) are cleaned around at your preference.' },
    ],
  },
  {
    id: 'upholstery-cleaning',
    name: 'Upholstery Cleaning',
    shortName: 'Upholstery',
    icon: Sofa,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop',
    badge: 'Fabric-Safe Deep Clean',
    tagline: 'Gentle, fabric-safe deep cleaning for sofas, sectionals, and chairs',
    intro: 'Your sofa absorbs more daily life than any other furnishing — skin oils, spills, pet dander, and dust. IQORA’s upholstery cleaning in {city} starts with a fiber identification test, then matches the right method to your fabric: hot-water extraction for durable weaves, low-moisture cleaning for delicate or natural fibers.',
    introSecondary: 'The result is furniture that looks, feels, and smells noticeably fresher — without the risk of shrinkage, browning, or water marks that DIY machines often cause.',
    chips: ['Fiber-ID tested', 'Low-moisture options', 'Dust-mite removal', 'Same-week appointments'],
    benefits: [
      { title: 'Fiber-safe methods', text: 'Every job starts with a fiber test so delicate silks, velvets, and natural weaves get the right treatment.' },
      { title: 'Dust mite & allergen removal', text: 'Deep extraction removes the allergens that live in cushions — a huge relief for asthma and allergy sufferers.' },
      { title: 'Body oil & soil release', text: 'Headrests and armrests collect oils that attract dirt; our pre-treatment dissolves them completely.' },
      { title: 'Deodorizing included', text: 'Every cleaning includes an enzyme deodorizer that neutralizes odors rather than masking them.' },
      { title: 'Protective finish option', text: 'Fabric protector helps future spills bead up so you can blot them away before they stain.' },
      { title: 'Fast dry, no water marks', text: 'Controlled moisture and professional extraction prevent the ring marks home machines leave behind.' },
    ],
    process: [
      { title: 'Fiber ID & colorfast test', text: 'We test an inconspicuous spot to confirm the safest cleaning method for your fabric.' },
      { title: 'Dry soil removal', text: 'HEPA vacuuming and compressed-air dusting pull dry soil out of seams, crevices, and cushions.' },
      { title: 'Pre-treatment & agitation', text: 'A fabric-specific solution is worked into the weave to suspend oils and soils.' },
      { title: 'Rinse extraction & groom', text: 'Soil is rinsed and extracted, then the fabric is groomed and speed-dried.' },
    ],
    priceSummary: 'Sofas from $119',
    pricingRows: [
      { item: 'Sofa (3-seat)', price: '$119 – $179' },
      { item: 'Loveseat', price: '$89 – $129' },
      { item: 'Armchair / recliner', price: '$59 – $89' },
      { item: 'Dining chair (set of 4)', price: '$60 – $100' },
      { item: 'Ottoman', price: '$35 – $55' },
      { item: 'Fabric protector (optional)', price: '$25 – $45 per piece' },
    ],
    faqs: [
      { q: 'How long does upholstery take to dry?', a: 'Most fabrics are dry in 2–6 hours depending on fiber type and airflow. Delicate fabrics cleaned with low-moisture methods often dry in under 2 hours.' },
      { q: 'Can you clean “W” and “S” code fabrics?', a: 'Yes. Water-safe (W) fabrics get extraction cleaning, while dry-clean-only (S) fabrics get a low-moisture solvent-based method. We verify the code before starting.' },
      { q: 'Will cleaning shrink my cushion covers?', a: 'No. We clean upholstery in place with controlled moisture. We never remove and machine-wash covers, which is what causes shrinkage.' },
      { q: 'Can you get out old stains?', a: 'We remove most food, grease, and soil stains. Set dyes, bleach damage, and pet urine that has permanently altered fibers may be beyond cleaning — we’ll tell you honestly before treating.' },
      { q: 'How often should upholstery be cleaned?', a: 'Every 12–18 months for most households; every 6–12 months if you have pets, young children, or allergies.' },
    ],
  },
  {
    id: 'tile-and-grout-cleaning',
    name: 'Tile & Grout Cleaning',
    shortName: 'Tile & Grout',
    icon: LayoutGrid,
    image: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=1200&auto=format&fit=crop',
    badge: 'Restore, Don’t Replace',
    tagline: 'Pressure-clean tile and grout that looks new again',
    intro: 'Dirty, discolored grout makes otherwise beautiful floors look tired — and mopping only pushes soil deeper into the pores. IQORA’s professional tile and grout cleaning in {city} uses high-pressure, heated rinsing with simultaneous vacuum recovery, blasting buildup out of grout lines that scrubbing can’t touch.',
    introSecondary: 'Finish with a penetrating grout sealer and your floors will stay bright and resist staining for years instead of months.',
    chips: ['High-pressure rinse', 'Grout sealing available', 'Showers & floors', 'Color seal options'],
    benefits: [
      { title: 'Restores grout color', text: 'Heated pressure cleaning removes the embedded grime that makes grout look brown or black.' },
      { title: 'Kills mold & mildew', text: 'Shower and bathroom tile gets an antimicrobial treatment that halts mold at the root.' },
      { title: 'Seals out future stains', text: 'Penetrating sealers block liquids and oils from soaking into porous grout after we clean.' },
      { title: 'Color seal option', text: 'Want a new look? Color sealing can recolor grout lines in the shade of your choice.' },
      { title: 'All tile types', text: 'Ceramic, porcelain, natural stone, travertine, and Saltillo — each cleaned with the right method.' },
      { title: 'No more mopping residue', text: 'We extract all water and soil, so floors are truly clean — not redistributed.' },
    ],
    process: [
      { title: 'Tile & grout inspection', text: 'We identify your tile type and check grout condition, prior sealers, and damage.' },
      { title: 'Alkaline pre-treatment', text: 'A heated alkaline solution loosens grease, soap scum, and embedded soil from grout lines.' },
      { title: 'Pressure rinse & extraction', text: 'Up to 1,200 PSI heated rinsing inside a contained dome, vacuumed up instantly — no flooding.' },
      { title: 'Seal & final inspection', text: 'Grout is sealed (standard or color) and we walk the floor with you before wrapping up.' },
    ],
    priceSummary: 'From $0.75 per sq ft',
    pricingRows: [
      { item: 'Floor tile & grout cleaning', price: '$0.75 – $1.50 / sq ft' },
      { item: 'Grout sealing (clear)', price: '$0.50 – $1.00 / sq ft' },
      { item: 'Grout color sealing', price: '$2.00 – $4.00 / sq ft' },
      { item: 'Shower tile & grout', price: '$149 – $299' },
      { item: 'Natural stone / travertine', price: '$1.00 – $2.00 / sq ft' },
      { item: 'Minimum service call', price: '$149' },
    ],
    faqs: [
      { q: 'How long do tile floors take to dry?', a: 'Floors are dry to walk on in 1–2 hours. Sealer needs 24 hours to fully cure, during which you should keep the floor dry.' },
      { q: 'Will pressure cleaning damage my grout?', a: 'No — pressure is contained and adjusted to your tile type. Actually, sanded grout benefits from the deep clean; we flag any pre-existing cracks before starting.' },
      { q: 'Can you make discolored grout look new?', a: 'Deep cleaning removes most discoloration. For permanently stained grout, color sealing restores a uniform look in any shade you choose.' },
      { q: 'How often should grout be resealed?', a: 'High-traffic floors and showers should be resealed every 1–2 years. We’ll tell you when yours is due.' },
      { q: 'Do you clean shower glass too?', a: 'Yes — hard-water spot removal on shower glass can be added to any shower tile service.' },
    ],
  },
];

export const SPECIALTY_SERVICES = [
  {
    id: 'area-rug-cleaning',
    name: 'Area Rug Cleaning',
    icon: Frame,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop',
    badge: 'Free Pickup & Delivery',
    tagline: 'Delicate rug care with complimentary pickup and delivery',
    intro: 'Persian, Oriental, wool, silk-blend, or modern machine-made — every rug gets fiber-appropriate care, never a one-size-fits-all wash. We pick up your rug in {city}, clean it in our controlled facility where it can be dusted, washed, and dried properly, then return it neatly rolled.',
    chips: ['All fibers & weaves', 'Free pickup & delivery', 'Fringe detailing', 'Pet odor treatment'],
    benefits: [
      { title: 'Full immersion dusting', text: 'Compressed-air dusting removes pounds of dry soil that home vacuuming never reaches.' },
      { title: 'Fiber-matched washing', text: 'Wool, silk, viscose, cotton, and synthetics each get their own wash chemistry and method.' },
      { title: 'Fringe & detail work', text: 'Fringes are hand-cleaned and detailed — not bleached into frayed strips.' },
      { title: 'Pet odor & stain treatment', text: 'Submersion deodorizing removes urine salts and odors all the way through the foundation.' },
      { title: 'Moisture-controlled drying', text: 'Climate-controlled flat drying prevents dye bleed, browning, and shrinkage.' },
      { title: 'Optional stain protection', text: 'Fiber-safe protector keeps future spills from setting into the pile.' },
    ],
    priceSummary: 'From $3 per sq ft',
    pricingRows: [
      { item: 'Synthetic rugs', price: '$3 – $4 / sq ft' },
      { item: 'Wool rugs', price: '$4 – $6 / sq ft' },
      { item: 'Silk & fine rugs', price: '$6 – $9 / sq ft' },
      { item: 'Pet urine submersion treatment', price: 'quoted after inspection' },
      { item: 'Pickup & delivery', price: 'Free within our service area' },
    ],
    faqs: [
      { q: 'Do you clean rugs in my home?', a: 'Small synthetic rugs can sometimes be cleaned on-site, but woven and natural-fiber rugs clean far better in our facility, where they can be fully dusted, washed, and dried flat.' },
      { q: 'How long does facility cleaning take?', a: 'Typically 5–7 days including pickup and delivery. Rush service is available for an additional fee.' },
      { q: 'Will the colors bleed?', a: 'We dye-test every rug before washing. When bleeding risk exists, we adjust the method to protect the dyes.' },
      { q: 'Can you remove pet urine from a wool rug?', a: 'Yes — submersion and flushing treatments remove urine salts from the foundation. We’ll assess the rug and confirm before treating.' },
    ],
  },
  {
    id: 'mattress-cleaning',
    name: 'Mattress Cleaning',
    icon: BedDouble,
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1200&auto=format&fit=crop',
    badge: 'Allergy Relief',
    tagline: 'Deep-clean sleep surfaces for allergy relief and fresher nights',
    intro: 'A mattress collects years of sweat, skin cells, and dust mites — the top trigger for nighttime allergies. Our {city} mattress cleaning service uses HEPA extraction and UV-assisted sanitizing followed by a low-moisture rinse that leaves your mattress fresh and dry by bedtime.',
    chips: ['Dust-mite removal', 'UV sanitizing', 'Low-moisture clean', 'Dry by bedtime'],
    benefits: [
      { title: 'Dust mite removal', text: 'Deep vacuum extraction with HEPA filtration removes mites and their allergen-laden waste.' },
      { title: 'Sweat & odor neutralizing', text: 'Enzyme treatments break down the organic compounds that cause that musty mattress smell.' },
      { title: 'Stain treatment', text: 'Targeted spotting for common stains — always tested first to protect the fabric.' },
      { title: 'Dry by bedtime', text: 'Low-moisture methods and air movers mean you can sleep on it the same night.' },
      { title: 'All-natural options', text: 'Fragrance-free, hypoallergenic products available for sensitive sleepers.' },
      { title: 'Protective treatment', text: 'Optional mattress-safe protector helps future spills from absorbing in.' },
    ],
    priceSummary: 'From $99 per mattress',
    pricingRows: [
      { item: 'Twin / Full', price: '$99 – $119' },
      { item: 'Queen', price: '$119 – $139' },
      { item: 'King / Cal-King', price: '$139 – $159' },
      { item: 'Dust mite anti-allergen treatment', price: '$25 per mattress' },
      { item: 'Both sides (flip & clean)', price: '+ 40%' },
    ],
    faqs: [
      { q: 'How often should a mattress be cleaned?', a: 'Every 6 months is ideal, especially for allergy sufferers. It’s the single most effective step against nighttime congestion and sneezing.' },
      { q: 'Can you remove urine stains and odor from a mattress?', a: 'Most surface-level urine responds well to enzyme treatment. Deep saturation that reached the inner layers may only be reduced — we’ll assess and set expectations first.' },
      { q: 'How long does it take to dry?', a: 'Typically 2–4 hours with airflow, so a morning cleaning is dry by bedtime.' },
      { q: 'Is the treatment safe for kids’ mattresses?', a: 'Yes — we use fragrance-free, hypoallergenic products on children’s mattresses by default.' },
    ],
  },
  {
    id: 'leather-couch-cleaning',
    name: 'Leather Couch Cleaning',
    icon: Armchair,
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200&auto=format&fit=crop',
    badge: 'Clean & Condition',
    tagline: 'pH-balanced cleaning and conditioning that keeps leather supple',
    intro: 'Leather is skin — it needs cleaning and moisturizing, not harsh soaps. IQORA’s leather furniture cleaning in {city} uses pH-balanced, leather-specific cleaners followed by a conditioning treatment that restores softness and helps prevent the cracking and fading that dry California air accelerates.',
    chips: ['pH-balanced products', 'Deep conditioning', 'Aniline & protected leather', 'Color-safe'],
    benefits: [
      { title: 'Body-oil removal', text: 'Headrests and armrests collect oils that slowly damage the finish; our cleaners dissolve them safely.' },
      { title: 'Deep conditioning', text: 'Professional conditioners restore moisture and flexibility, delaying cracks and creases.' },
      { title: 'Finish-safe process', text: 'We identify your leather type — aniline, semi-aniline, or protected — before cleaning anything.' },
      { title: 'Color & sheen revived', text: 'Cleaning plus conditioning often restores much of the original depth and luster.' },
      { title: 'Invisible repair quotes', text: 'We can quote minor scuff, scratch, and color-refinishing work after inspection.' },
      { title: 'Twice-yearly plans', text: 'Regular conditioning visits keep luxury furniture investment-grade for decades.' },
    ],
    priceSummary: 'Sofas from $149',
    pricingRows: [
      { item: 'Leather sofa', price: '$149 – $229' },
      { item: 'Loveseat', price: '$119 – $169' },
      { item: 'Armchair / recliner', price: '$79 – $119' },
      { item: 'Sectional (per section)', price: '$89 – $129' },
      { item: 'Leather protection cream', price: '$35 – $55 per piece' },
    ],
    faqs: [
      { q: 'Can you fix cracked or faded leather?', a: 'Light dryness and fading improve significantly with conditioning. Deep cracks and color loss need restoration work, which we quote after inspecting the piece.' },
      { q: 'Is cleaning safe for aniline (natural) leather?', a: 'Yes, using specifically designed aniline-safe products and gentler methods. We confirm the leather type before any cleaning begins.' },
      { q: 'How often should leather be cleaned and conditioned?', a: 'Twice a year for regularly used furniture, especially in dry climates that pull moisture from the hide.' },
      { q: 'Will cleaning make my couch slippery or shiny?', a: 'No — residue-free cleaners and properly absorbed conditioners leave leather soft and matte, not greasy.' },
    ],
  },
  {
    id: 'scotchgard-protection',
    name: 'Scotchgard Protection',
    icon: ShieldCheck,
    image: 'https://images.unsplash.com/photo-1584622781863-ecfdec5b8850?q=80&w=1200&auto=format&fit=crop',
    badge: 'Prevent Future Stains',
    tagline: 'Invisible protection that keeps spills from becoming stains',
    intro: 'The best time to fight a stain is before it happens. Scotchgard fabric and carpet protection creates an invisible barrier around each fiber so spills bead on the surface instead of soaking in — giving you time to blot them away. Applied after a professional cleaning in {city}, it keeps your investment cleaner, longer.',
    chips: ['Carpet & upholstery', 'Applied after cleaning', 'Kid & pet safe once dry', 'Extends cleaning results'],
    benefits: [
      { title: 'Spills bead, not soak', text: 'Protected fibers repel liquids, so coffee, wine, and juice can be blotted up before they stain.' },
      { title: 'Extends clean time', text: 'Protected carpet and furniture resists oily soil buildup, so cleanings stay effective longer.' },
      { title: 'Easier spot cleanup', text: 'Everyday spots release with plain water instead of aggressive scrubbing.' },
      { title: 'Safe after drying', text: 'Once cured, the protective layer is safe for kids and pets and doesn’t affect fabric feel.' },
      { title: 'Works on most fibers', text: 'Effective on nylon, wool blends, polyester, and most upholstery weaves — we confirm compatibility first.' },
      { title: 'Best-value add-on', text: 'A fraction of replacement cost, applied in minutes right after your cleaning.' },
    ],
    priceSummary: 'From $20 per room / $25 per piece',
    pricingRows: [
      { item: 'Carpet protection', price: '$20 – $35 / room' },
      { item: 'Fabric sofa protection', price: '$25 – $45' },
      { item: 'Area rug protection', price: '$0.50 – $1.00 / sq ft' },
      { item: 'Dining chair set', price: '$10 – $15 / chair' },
    ],
    faqs: [
      { q: 'Does Scotchgard work on old carpet?', a: 'It can, but it performs best on freshly cleaned fibers — dirt sealed under the protector becomes much harder to remove. That’s why we apply it after professional cleaning.' },
      { q: 'Is it safe for pets and children?', a: 'Yes. Once fully dried (about 4–6 hours), the cured protector is safe for the whole household.' },
      { q: 'How long does protection last?', a: 'On carpet in typical traffic areas, 12–24 months. Upholstery often holds protection longer since it sees less abrasion.' },
      { q: 'Will it change how my fabric feels?', a: 'No — the protector is applied at the fiber level and doesn’t stiffen or coat the surface.' },
    ],
  },
  {
    id: 'curtain-cleaning',
    name: 'Curtain Cleaning',
    icon: Blinds,
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
    badge: 'On-Site or Facility',
    tagline: 'Dust-free, fresh drapery without ever leaving your windows bare',
    intro: 'Curtains filter sunlight and air — which means they quietly collect dust, odors, and allergens. IQORA cleans drapery in {city} two ways: on-site while hanging (ultrasonic and low-moisture methods for sturdy fabrics) or via careful takedown and facility cleaning for lined, pleated, or delicate panels.',
    chips: ['Cleaned while hanging', 'Lined & pleated drapery', 'Shrink-safe methods', 'Deodorizing included'],
    benefits: [
      { title: 'No bare windows', text: 'On-site cleaning means your windows are never uncovered and nothing needs re-hanging.' },
      { title: 'Shrink-safe methods', text: 'Controlled moisture and tested chemistry prevent the shrinking and lining damage washing causes.' },
      { title: 'Allergen removal', text: 'Dust, pollen, and dander that settle into folds are extracted with HEPA filtration.' },
      { title: 'Odor neutralizing', text: 'Cooking, smoke, and pet odors release with enzyme deodorizing, not perfumes.' },
      { title: 'Lined & blackout panels', text: 'We handle heavy, lined, and blackout drapes that home machines ruin.' },
      { title: 'Re-hanging included', text: 'For facility-cleaned drapery, we take down, clean, press, and re-hang everything ourselves.' },
    ],
    priceSummary: 'From $89 per panel set',
    pricingRows: [
      { item: 'Standard panel (on-site)', price: '$25 – $45 / panel' },
      { item: 'Lined / blackout panel', price: '$40 – $70 / panel' },
      { item: 'Pleated & delicate drapery', price: 'quoted after inspection' },
      { item: 'Take-down & re-hang', price: '$15 – $25 / panel' },
    ],
    faqs: [
      { q: 'Can you clean curtains without taking them down?', a: 'Yes — most standard panels clean beautifully on-site while hanging, using low-moisture methods. Delicate or heavily lined drapes do better in our facility.' },
      { q: 'Will my curtains shrink?', a: 'No. Shrinkage comes from hot water and tumble dryers; our methods avoid both. Fabric type determines the process before we start.' },
      { q: 'How often should drapery be cleaned?', a: 'Every 1–2 years, or yearly if anyone in the home has allergies or you cook frequently.' },
      { q: 'Do you clean blinds too?', a: 'Yes — ultrasonic blind cleaning is available as an add-on for most blind types.' },
    ],
  },
];

export const REVIEWS = [
  { name: 'Melissa R.', city: 'North Hollywood', service: 'Carpet Cleaning', rating: 5, date: '2 weeks ago', text: 'Our rental’s carpets were honestly embarrassing — two dogs and three years of neglect. IQORA got them cleaner than I expected possible. The pet odor is completely gone.' },
  { name: 'Daniel K.', city: 'Burbank', service: 'Upholstery Cleaning', rating: 5, date: '1 month ago', text: 'They steam-cleaned our sectional and it looks brand new. Tech was on time, shoe covers on, and explained the fiber test before starting. Very professional outfit.' },
  { name: 'Priya S.', city: 'Glendale', service: 'Tile & Grout Cleaning', rating: 5, date: '1 month ago', text: 'Our kitchen grout went from brown-ish to the original cream color. They sealed it afterward and it still looks great months later. Worth every penny.' },
  { name: 'James T.', city: 'Sherman Oaks', service: 'Area Rug Cleaning', rating: 5, date: '2 months ago', text: 'Free pickup and delivery for our wool rug — came back looking incredible, fringe detailed and everything. Facility cleaning is clearly a different level.' },
  { name: 'Angela M.', city: 'Studio City', service: 'Carpet Cleaning', rating: 5, date: '2 months ago', text: 'Booked online, got a text confirmation, tech showed up in the window promised. Carpets dried by dinner. Exactly the hassle-free experience I wanted.' },
  { name: 'Robert & Lynn H.', city: 'Encino', service: 'Leather Couch Cleaning', rating: 5, date: '3 months ago', text: 'Our leather sofa was drying out and dull. The cleaning plus conditioning brought the color back. They clearly know leather — will book the twice-yearly plan.' },
  { name: 'Sofia G.', city: 'Van Nuys', service: 'Mattress Cleaning', rating: 5, date: '3 months ago', text: 'My son’s allergies were waking him up nightly. After the mattress treatment, the difference was immediate. Wish we’d done it years ago.' },
  { name: 'Marcus W.', city: 'Pasadena', service: 'Tile & Grout Cleaning', rating: 5, date: '4 months ago', text: 'Color-sealed the grout in two bathrooms — picked a modern gray that totally updated the rooms. Meticulous work, clean job site every day.' },
  { name: 'Helen B.', city: 'Toluca Lake', service: 'Curtain Cleaning', rating: 5, date: '5 months ago', text: 'They cleaned our heavy lined drapes in our home while hanging — no bare windows, no shrinkage, no drama. Dust and years of mustiness gone.' },
];

export const PORTFOLIO = [
  { title: 'Pet-Damaged Family Room Revival', service: 'Carpet Cleaning', city: 'North Hollywood', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=900&auto=format&fit=crop', description: 'Enzyme treatment + steam extraction on a pet-stained family room carpet. Odor eliminated, carpet saved from replacement.', result: '$1,800 replacement avoided' },
  { title: 'Media District Office Refresh', service: 'Carpet Cleaning', city: 'Burbank', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=900&auto=format&fit=crop', description: 'After-hours cleaning of 4,000 sq ft of commercial carpet across a production office. Zero disruption to the workday.', result: '4,000 sq ft cleaned overnight' },
  { title: 'White Sectional Rescue', service: 'Upholstery Cleaning', city: 'Sherman Oaks', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=900&auto=format&fit=crop', description: 'White performance-fabric sectional with coffee and makeup stains. Fiber-tested, extracted, and deodorized.', result: 'All 9 stains removed' },
  { title: 'Craftsman Kitchen Floors', service: 'Tile & Grout Cleaning', city: 'Pasadena', image: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=900&auto=format&fit=crop', description: '1930s Craftsman kitchen tile with original grout. Gentle alkaline clean and clear sealer preserved the period character.', result: 'Original tile preserved' },
  { title: 'Persian Rug Restoration Clean', service: 'Area Rug Cleaning', city: 'Encino', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=900&auto=format&fit=crop', description: 'Hand-made Persian wool rug with pet urine contamination. Full immersion dusting, wash, and submersion deodorizing.', result: 'Odor fully eliminated' },
  { title: 'Master Shower Makeover', service: 'Tile & Grout Cleaning', city: 'Glendale', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=900&auto=format&fit=crop', description: 'Mold-stained shower tile and grout with antimicrobial treatment, hard-water spot removal, and re-seal.', result: 'Mold treated at the root' },
  { title: 'Sleep Allergy Relief', service: 'Mattress Cleaning', city: 'Van Nuys', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=900&auto=format&fit=crop', description: 'King mattress with years of dust-mite buildup. HEPA extraction, UV sanitize, and anti-allergen treatment.', result: 'Nighttime allergies gone' },
  { title: 'Executive Leather Care', service: 'Leather Couch Cleaning', city: 'Studio City', image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=900&auto=format&fit=crop', description: 'Faded, dry leather club chairs cleaned, conditioned, and color-revived in a home office.', result: 'Leather supple again' },
  { title: 'Blackout Drapery Deep Clean', service: 'Curtain Cleaning', city: 'Toluca Lake', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=900&auto=format&fit=crop', description: 'Heavy lined blackout panels, taken down, facility-cleaned, pressed, and re-hung by our team.', result: '5 years of dust removed' },
];

export const FAQ_GROUPS = [
  {
    group: 'General',
    items: [
      { q: 'What areas do you serve?', a: 'We serve North Hollywood and nine surrounding cities: Burbank, Glendale, Sherman Oaks, Van Nuys, Encino, Studio City, Valley Village, Toluca Lake, and Pasadena.' },
      { q: 'Are you licensed and insured?', a: 'Yes — IQORA Cleaning Services is fully licensed, bonded, and insured for both residential and commercial work.' },
      { q: 'What makes IQORA different from other cleaning companies?', a: 'We specialize in restorative cleaning of carpet, upholstery, tile, and fine furnishings — not general housekeeping. Every technician is certified, every job starts with an inspection, and every service is backed by a 100% satisfaction guarantee.' },
      { q: 'Are your products safe for kids and pets?', a: 'Yes. We use eco-certified, fragrance-free solutions by default and offer fully hypoallergenic product lines for sensitive households.' },
    ],
  },
  {
    group: 'Pricing & Payment',
    items: [
      { q: 'How much does carpet cleaning cost?', a: 'Most rooms run $89–$139, with whole-home packages that reduce the per-room rate. See our pricing page for the full breakdown by service.' },
      { q: 'Do you charge by the hour or by the job?', a: 'By the job — you approve the exact price after our on-site inspection, before any work begins. No hourly surprises.' },
      { q: 'What payment methods do you accept?', a: 'All major credit and debit cards, Apple Pay, Google Pay, Zelle, and cash. Payment is due at completion.' },
      { q: 'Is there a minimum charge?', a: 'Yes, our minimum service call is $149, which covers a single room or piece of furniture.' },
    ],
  },
  {
    group: 'Scheduling & Service Day',
    items: [
      { q: 'How soon can I get an appointment?', a: 'Most customers are scheduled within the same week, often within 2–3 days. Same-day service is sometimes available — call us to check.' },
      { q: 'How long will my appointment take?', a: 'A typical 3-room carpet cleaning takes 60–90 minutes. Upholstery, tile, and rug jobs vary; you’ll get a time estimate with your quote.' },
      { q: 'Do I need to be home during the cleaning?', a: 'Not necessarily. Many customers let us in and leave for the day. We can also arrange lock-out/lock-back access with prior approval.' },
      { q: 'What should I do before the crew arrives?', a: 'Remove small breakables from furniture being moved, pick up small items from floors, and secure pets. We handle the rest.' },
    ],
  },
  {
    group: 'Guarantees & After-Care',
    items: [
      { q: 'What if a stain comes back?', a: 'If any spot returns within 7 days of service, we come back and re-treat it free of charge. Some wicking from carpet padding can briefly re-surface in deep-stained areas.' },
      { q: 'What if I’m not satisfied with the results?', a: 'Tell us within 7 days and we’ll re-clean the area. If you’re still not satisfied, you don’t pay for that area. That’s our 100% satisfaction guarantee.' },
      { q: 'How can I keep my carpets cleaner between visits?', a: 'Vacuum weekly with a HEPA vacuum, blot spills immediately (never rub), and add a no-shoes rule at entries. Protector application also dramatically extends results.' },
      { q: 'Do you offer maintenance plans?', a: 'Yes — recurring plans (quarterly or semi-annual) come with priority scheduling and discounted rates on every visit.' },
    ],
  },
];

export const BLOG_POSTS = [
  {
    slug: 'how-much-does-carpet-cleaning-cost-in-north-hollywood',
    title: 'How Much Does Carpet Cleaning Cost in North Hollywood? (2026 Price Guide)',
    excerpt: 'Real price ranges for carpet cleaning in North Hollywood and the surrounding Valley — what drives the cost, how city-by-city prices compare, and how to get the most value from every visit.',
    date: 'January 15, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop',
    content: [
      { p: 'If you’re comparing carpet cleaning quotes in North Hollywood, you’ve probably seen everything from “$59 whole house” flyers to $400+ estimates — and wondered what the real number is. Here’s the honest breakdown based on thousands of jobs across the San Fernando Valley.' },
      { h2: 'Average carpet cleaning prices in North Hollywood' },
      { p: 'For a typical 3-bedroom home, most {city} customers pay between $180 and $350 for a professional, truck-mounted steam cleaning. Per-room pricing usually lands like this:' },
      { table: { head: ['Item', 'Typical Price Range'], rows: [['Bedroom (up to 150 sq ft)', '$89 – $139'], ['Living room / large room', '$99 – $149'], ['Hallway', '$25 – $40'], ['Stairs (per step)', '$5 – $8'], ['Whole-home package (4+ rooms)', '$280 – $450']] } },
      { h2: 'What actually drives the price' },
      { ul: ['Size and room count — the biggest factor, though packages drop the per-room rate', 'Soil level — heavily soiled or long-uncleaned carpet needs pre-treatment and extra passes', 'Pet contamination — urine treatment ($30–$60 per area) is separate because it requires enzyme products and padding-level work', 'Stairs — priced per step because they take disproportionately long', 'Protector — Scotchgard adds $20–$35 per room and extends your results'] },
      { h2: 'Why the “$59 whole house” ads are a trap' },
      { p: 'Rock-bottom prices are bait: the company arrives, then upsells room-by-room, pre-treatment, deodorizer, and “deep scrub” until the bill triples. A legitimate company quotes a firm price after inspection — before work starts — and honors it.' },
      { h2: 'How North Hollywood compares to nearby cities' },
      { p: 'Prices are remarkably consistent across North Hollywood, Burbank, Van Nuys, and the surrounding cities — you shouldn’t see more than a 10% difference for the same job. What varies far more is quality: truck-mounted equipment versus portable machines, and certified technicians versus day labor.' },
      { h2: 'How to get the most value from your cleaning' },
      { ul: ['Bundle rooms — per-room price drops as room count rises', 'Clean annually instead of waiting until carpet looks bad — restoration costs more than maintenance', 'Add protector on high-traffic rooms only, like hallways and family rooms', 'Vacuum thoroughly before the crew arrives; it lets them spend time on extraction, not dry soil'] },
      { h2: 'The bottom line' },
      { p: 'Budget $180–$350 for a standard 3-bedroom home in North Hollywood, with firm quotes and no surprises from IQORA. Book a free on-site estimate and we’ll confirm your exact price before any work begins.' },
    ],
  },
];

export const ALL_SERVICES = [...SERVICES, ...SPECIALTY_SERVICES];

export const MAIN_PAGE_ROUTES = {
  home: '/',
  about: '/about-us',
  'cleaning-services': '/cleaning-services',
  'areas-we-serve': '/areas-we-serve',
  pricing: '/cleaning-services-pricing',
  reviews: '/our-reviews',
  portfolio: '/portfolio',
  faq: '/faq',
  contact: '/contact-us',
  blog: '/blog',
};

export const SERVICE_ROUTE_PATHS = {
  'carpet-cleaning': '/carpet-cleaning-services-in-north-hollywood',
  'upholstery-cleaning': '/upholstery-cleaning-services-in-north-hollywood',
  'tile-and-grout-cleaning': '/tile-and-grout-cleaning-services-in-north-hollywood',
};

export const SERVICE_CITY_ROUTE_PREFIXES = {
  'carpet-cleaning': '/carpet-cleaning-services-in-',
  'upholstery-cleaning': '/upholstery-cleaning-services-in-',
  'tile-and-grout-cleaning': '/tile-and-grout-cleaning-services-in-',
};

export const SPECIALTY_ROUTE_PATHS = {
  'area-rug-cleaning': '/area-rug-cleaning-services',
  'mattress-cleaning': '/mattress-cleaning-services',
  'leather-couch-cleaning': '/leather-couch-cleaning-services',
  'scotchgard-protection': '/scotchgard-protection-services',
  'curtain-cleaning': '/curtain-cleaning-services',
};

export const getMainPagePath = (pageKey) => MAIN_PAGE_ROUTES[pageKey] || '/';
export const getServicePath = (serviceId) => SERVICE_ROUTE_PATHS[serviceId] || '/cleaning-services';
export const getServiceCityPath = (serviceId, citySlug) => {
  const prefix = SERVICE_CITY_ROUTE_PREFIXES[serviceId];
  const city = getCity(citySlug) || getParentCity();

  if (!prefix || !city) {
    return getServicePath(serviceId);
  }

  return `${prefix}${city.slug}`;
};
export const getSpecialtyPath = (specialtyId) => SPECIALTY_ROUTE_PATHS[specialtyId] || '/cleaning-services';

export const getService = (id) => SERVICES.find((s) => s.id === id);
export const getSpecialty = (id) => SPECIALTY_SERVICES.find((s) => s.id === id);
export const getCity = (slug) => CITIES.find((c) => c.slug === slug);
export const getParentCity = () => CITIES.find((c) => c.isParent);
export const getChildCities = () => CITIES.filter((c) => !c.isParent);
export const getBlogPost = (slug) => BLOG_POSTS.find((p) => p.slug === slug);

export const PRERENDER_ROUTES = [
  ...Object.values(MAIN_PAGE_ROUTES),
  ...SERVICES.flatMap((service) => CITIES.map((city) => getServiceCityPath(service.id, city.slug))),
  ...Object.keys(SPECIALTY_ROUTE_PATHS).map((specialtyId) => getSpecialtyPath(specialtyId)),
  ...BLOG_POSTS.map((post) => `/blog/${post.slug}`),
];
