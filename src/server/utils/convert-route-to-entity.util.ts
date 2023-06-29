const mapping: Record<string, string> = {
  companies: 'company',
  diagrams: 'diagram',
  flashcards: 'flashcard',
  notes: 'note',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
