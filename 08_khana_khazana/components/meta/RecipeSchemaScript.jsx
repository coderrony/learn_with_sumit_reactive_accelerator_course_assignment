function RecipeSchemaScript({ recipe }) {
  const recipeName = encodeURIComponent(recipe?.name);

  const formattedData = {
    "@context": "https://schema.org",
    "@type": "RecipeEvent",
    name: recipeName,
    startDate: new Date(),
    endDate: new Date(),
    description: recipe?.description,
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: recipe?.location,
    },
    image: [recipe?.image],
    organizer: {
      "@type": "Organization",
      name: "LWS",
      url: "https://learnwithsumit.com/",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(formattedData),
        }}
      />
    </>
  );
}

export default RecipeSchemaScript;
