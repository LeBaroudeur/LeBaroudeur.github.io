import mongoose from 'mongoose';

// `role`, `points` and `award` are bilingual ({ en, fr }); stored as Mixed and
// resolved to a locale on the client. `year` and `org` are language-neutral.
const experienceSchema = new mongoose.Schema(
  {
    year: { type: String, required: true },
    role: { type: mongoose.Schema.Types.Mixed, required: true },
    org: { type: String, required: true },
    points: { type: mongoose.Schema.Types.Mixed, default: {} },
    award: { type: mongoose.Schema.Types.Mixed, default: {} },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model('Experience', experienceSchema);
