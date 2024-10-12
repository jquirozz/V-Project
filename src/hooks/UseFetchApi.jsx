import { useEffect, useState, useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

function UseFetchApi({ query, param }) {
  const { language } = useContext(LanguageContext);
  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const res = await fetch(
          `https://valorant-api.com/v1/${query}?language=${language}&${param}`
        );
        const resJson = await res.json();

        if (resJson.status !== 200)
          throw new Error(resJson.error || "Failed to fetch characters.");

        setContent(resJson.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [query, param, language]);

  return { content, error, loading };
}

export default UseFetchApi;
