import * as react_jsx_runtime from 'react/jsx-runtime';

interface UtterancesConfig {
    provider: 'utterances';
    utterancesConfig: {
        theme?: string;
        darkTheme?: string;
        repo?: string;
        label?: string;
        issueTerm?: string;
    };
}
type UtterancesProps = UtterancesConfig['utterancesConfig'];
declare const Utterances: ({ theme, darkTheme, repo, label, issueTerm }: UtterancesProps) => react_jsx_runtime.JSX.Element;

export { Utterances, UtterancesConfig, UtterancesProps };
