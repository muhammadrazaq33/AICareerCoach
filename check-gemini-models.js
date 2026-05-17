import fetch from "node-fetch";

const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
  console.error("❌ GEMINI_API_KEY is not set");
  process.exit(1);
}

async function listModels() {
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`,
  );

  const data = await res.json();

  // 🔍 Debug output (important)
  if (!data.models) {
    console.error("❌ No models returned");
    console.error("Full response:", JSON.stringify(data, null, 2));
    return;
  }

  console.log("\n✅ Available models:\n");

  data.models.forEach((m) => {
    console.log(`• ${m.name} → ${m.supportedGenerationMethods?.join(", ")}`);
  });
}

listModels().catch(console.error);
