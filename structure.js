// structure.js
/**
 * Left-nav (Desk/Structure) tailored for a page-builder site.
 * Shows Pages first, then Images, then everything else.
 */
export const defaultStructure = (S) =>
    S.list()
        .title('Content')
        .items([
            S.listItem()
                .title('Pages')
                .schemaType('page')
                .child(S.documentTypeList('page').title('Pages')),
            S.divider(),
            S.listItem().title('Media').child(
                S.documentTypeList('sanity.imageAsset').title('Images')
            ),
            S.divider(),
            ...S.documentTypeListItems().filter(
                (li) => !['page', 'sanity.imageAsset'].includes(String(li.getId()))
            )
        ])
