// Bracketed values are placeholders for legal review and must be filled in before launch.
export const legalEntity = {
  name: "[Iconus legal entity name]",
  mailingAddress: "[Mailing address]",
  governingState: "[State]",
  venue: "[County], [State]",
};

export const legalLastUpdated = "October 19, 2026";

export type LegalListItem = string | { label: string; text: string };

export type LegalBlock = string | { list: readonly LegalListItem[] };

export type LegalSection = {
  id: string;
  title: string;
  content: readonly LegalBlock[];
};
