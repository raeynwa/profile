import detailedCases from './case-studies.json';
export const identity = {name: 'Raey Maulana Yunus', headline: 'Full-Stack Engineer | Next.js, NestJS & Laravel | System Architect'};
export const contact = {email: 'raeynwa@gmail.com', whatsapp: 'https://wa.me/6287792067999', github: 'https://github.com/raeynwa', linkedin: 'https://www.linkedin.com/in/raey-m-yunus-32b470233/'};
export const cvUrl = '/api/download';
export type GalleryView = {id: string; label: string; key: string; title: string; caption: string; copy: string; phone?: boolean};
export type CaseStudy = {
  id: string; name: string; kind: string; role: string; stack: string; image: string; data: string;
  summary: string; contribution: string; deck: string; intro: string; cover: string; problem: string[];
  ownership: string[][]; boundary: string; flowTitle: string; flow: string[][]; decisionTitle: string;
  decisions: string[][]; galleryTitle: string; gallery: GalleryView[]; disclosure: string;
  outcome: string; scope: string; demo?: boolean; liveUrl?: string; liveAccessNote?: string;
};
const tando: CaseStudy = {
  id: 'tando', name: 'Tando', kind: 'Personal product', role: 'Product direction & system architecture',
  stack: 'Next.js · NestJS · PostgreSQL · Docker', image: 'tando-list', data: 'Fictional data', demo: true,
  liveUrl: 'https://tando.raeynwa.my.id',
  liveAccessNote: 'Public product overview. Currently used privately; registration is not open to the public.',
  summary: 'Signature verification with a purpose, a document reference, and a defined validity period.',
  contribution: 'Product decisions, architecture, AI-directed implementation, testing, and deployment.',
  deck: 'Signature verification, with context.',
  intro: 'A concern in my own document workflow became a product for associating each signature with its intended purpose and current validity.',
  cover: 'Validity, scan activity, and recent access in one view.',
  problem: [
    'I received an internal document to fill in and sign. Anyone with its URL could open it, including the image of my signature.',
    'I wanted a way to associate a signature with a specific purpose and document, give it a defined validity period, and let a recipient check its current status.',
    'Tando grew from that workflow: a QR reference opens a verification page with the context of one issuance.',
  ],
  ownership: [
    ['Product direction', 'Defined the problem, requirements, user flows, and expected behaviour across valid, expired, and revoked states.'],
    ['System architecture', 'Chose the system boundaries, technology stack, dependencies, and the relationship between signers and issuances.'],
    ['AI-directed implementation', 'Directed AI research, documentation using my own templates, and implementation of the application code.'],
    ['Testing & deployment', 'Performed testing, evaluated the resulting behaviour, and deployed the product for my own use.'],
  ],
  boundary: 'AI wrote the implementation. I owned the product and architectural decisions, reviewed the behaviour, and took responsibility for testing and release.',
  flowTitle: 'One issuance. A defined context.',
  flow: [
    ['Define the context', 'Signer, purpose, source document, and validity period.'],
    ['Issue the QR', 'A reference to that issuance’s verification page.'],
    ['Check the status', 'Current validity and a context-specific watermark.'],
    ['Manage its lifecycle', 'Monitor activity, extend validity, or revoke it.'],
  ],
  decisionTitle: 'Decisions in the system',
  decisions: [
    ['Separate the signer from each issuance', 'The master signature belongs to a signer. Each issuance carries one document’s reference, purpose, validity period, and status. The same signer can have several issuances with different contexts.'],
    ['Check validity when the QR is opened', 'The verification page requests the current status. Expired and revoked views communicate the change and hide the signature image and document-opening action.'],
    ['Make the context part of the watermark', 'The displayed watermark includes the short code, purpose, expiry date, and scan time. These details connect the signature representation to its verification context.'],
    ['Design beyond the moment of issuance', 'Activity history, renewal, and revocation support what happens after a QR has been placed on a document. Expiry behaviour also supports temporary and archive views.'],
  ],
  galleryTitle: 'From issuance to verification.',
  gallery: [
    {id: 'issuance', label: 'Issuance', key: 'tando-form', title: 'Issuance form', caption: 'Define the context for one document.', copy: 'The issuance form brings together the signer, purpose, source document, expiry behaviour, and validity period. A summary supports review before the QR is issued.'},
    {id: 'verification', label: 'Verification', key: 'tando-valid', title: 'Valid verification', caption: 'Status and document context on desktop.', copy: 'A recipient checks the current issuance status and sees the watermarked signature with its document context. The same verification flow is available on a phone.'},
    {id: 'lifecycle', label: 'Lifecycle', key: 'tando-expired', title: 'Expired verification', caption: 'Validity has ended.', copy: 'Expired and revoked states communicate the change in validity. The signature image and document-opening action are hidden in these states.', phone: true},
  ],
  disclosure: 'Original Tando interface with fictional people, documents, activity, and codes. The signature is illustrative; the pictured QR uses an example domain.',
  outcome: 'I use Tando in my own document workflow. It brings document context, validity, verification, and lifecycle management into a product shaped around a problem I encountered.',
  scope: 'The aim is to reduce misuse and make verification clearer. Watermarking cannot guarantee that an image will never be copied. Tando is a personal verification tool, not a certified electronic-signature service.',
};
export const projects: CaseStudy[] = [tando, ...(detailedCases as CaseStudy[])];
export function getProject(slug: string) { return projects.find(project => project.id === slug); }
