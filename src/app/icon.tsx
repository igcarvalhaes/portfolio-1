export default function Icon() {
  return new Response(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <rect width="32" height="32" rx="6" fill="#000000"/>
      <text x="16" y="21" font-family="Arial" font-size="18" font-weight="bold" fill="white" text-anchor="middle">IC</text>
    </svg>`,
    {
      headers: {
        "Content-Type": "image/svg+xml",
      },
    }
  );
}
