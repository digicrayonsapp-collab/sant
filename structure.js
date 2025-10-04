export const defaultStructure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Media')
        .schemaType('sanity.imageAsset')
        .child(S.documentTypeList('sanity.imageAsset').title('Images')),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== 'sanity.imageAsset'
      ),
    ])
