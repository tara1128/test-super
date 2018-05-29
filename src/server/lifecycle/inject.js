import getClientFilePath from 'super-project/utils/get-client-file-path'
import { localeId } from 'super-project/i18n'

export default {
    js_locales: () => `<script src='${getClientFilePath('client.js')}'></script>`,
    title: 'Title - Using Super',
    lang: () => `${localeId}`
}
