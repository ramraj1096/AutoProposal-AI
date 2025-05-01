import { useState } from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";

const PromptSearch = () => {
  const [prompt, setPrompt] = useState("");
  const [error, setError] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const API_KEY = "AIzaSyChuVVGIyvriqpOTJBi-zFB-TwNbuPQAf4";

  const validatePrompt = (input) => {
    if (!input.trim()) return "Prompt cannot be empty.";
    if (input.length < 10)
      return "Prompt is too short. Describe your idea in more detail.";
    if (!/[a-zA-Z]{3,}/.test(input))
      return "Enter a valid project description.";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validatePrompt(prompt);
    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    setLoading(true);
    setResponse("");

    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `Generate a clean, concise, and professional software project proposal (max 500 words) for the following idea:\n\n"${prompt}"`,
                  },
                ],
              },
            ],
          }),
        }
      );

      const data = await res.json();
      const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

      setResponse(text || "No response from Gemini.");
    } catch (err) {
      setResponse("An error occurred while generating the proposal.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full max-w-3xl mx-auto px-4 py-16">
      <motion.h2
        className="text-3xl font-bold text-center text-gray-800 mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Generate a Project Proposal
      </motion.h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center gap-4 mb-4"
      >
        <input
          type="text"
          className="flex-1 w-full px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          placeholder="e.g. Build a SaaS platform for task management with billing"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow transition min-w-[130px]"
        >
          {loading ? "Generating..." : "Generate"}
        </button>
      </form>

      {error && <p className="text-red-600 text-sm mb-3">{error}</p>}

      {response && (
        <motion.div
          className="mt-8 bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-blue-600 mb-4">
            Generated Proposal
          </h3>

          <ReactMarkdown
            components={{
              h1: (props) => (
                <h1 className="text-3xl font-bold mt-6 mb-4" {...props} />
              ),
              h2: (props) => (
                <h2 className="text-2xl font-semibold mt-4 mb-3" {...props} />
              ),
              p: (props) => (
                <p className="text-gray-700 mb-3 leading-relaxed" {...props} />
              ),
              ul: (props) => (
                <ul className="list-disc list-inside ml-4 mb-3" {...props} />
              ),
              ol: (props) => (
                <ol className="list-decimal list-inside ml-4 mb-3" {...props} />
              ),
              li: (props) => <li className="mb-1" {...props} />,
              strong: (props) => (
                <strong className="font-semibold text-blue-700" {...props} />
              ),
              code: (props) => (
                <code
                  className="bg-gray-100 rounded px-1 py-0.5 text-sm font-mono"
                  {...props}
                />
              ),
            }}
          >
            {response}
          </ReactMarkdown>
        </motion.div>
      )}
    </section>
  );
};

export default PromptSearch;
