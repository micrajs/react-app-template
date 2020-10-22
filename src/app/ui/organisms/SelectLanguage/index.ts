import { connect } from 'helpers/connect';
import SelectLanguage from 'app/ui/organisms/SelectLanguage/SelectLanguage';
import { useSelectLanguage } from 'app/ui/organisms/SelectLanguage/useSelectLanguage';

export default connect(useSelectLanguage, SelectLanguage);
