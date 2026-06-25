import mongoose from 'mongoose';

// `tag` and `blurb` are bilingual ({ en, fr }); stored as Mixed and resolved
// to a locale on the client. `title`, `slug`, `stack` are language-neutral.
const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    tag: { type: mongoose.Schema.Types.Mixed, default: {} },
    blurb: { type: mongoose.Schema.Types.Mixed, required: true },
    stack: { type: [String], default: [] },
    repo: { type: String, default: '' },
    report: { type: String, default: '' },
    reportDate: { type: String, default: '' },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model('Project', projectSchema);
