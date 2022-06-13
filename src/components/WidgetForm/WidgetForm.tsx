import { useState } from 'react';
import FeedbackTypeStep from './steps/FeedbackTypeStep';
import FeedbackContentStep from './steps/FeedbackContentStep';

import CloseButton from '../CloseButton';

import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import FeedbackSucessStep from './steps/FeedbackSucessStep';

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        }
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lámpada'
        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de um balão de pensamento'
        }
    }
};

export type FeedbackType = keyof typeof feedbackTypes;
const WidgetForm = () => {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [feedbackSent, sentFeedbackSent] = useState(false);

    const handleRestartFeedback = () => {
        setFeedbackType(null);
        sentFeedbackSent(false);
    };

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {feedbackSent ? (
                <FeedbackSucessStep
                    onFeedbackRestartRequested={handleRestartFeedback}
                />
            ) : (
                <>
                    {!feedbackType ? (
                        <FeedbackTypeStep
                            onFeedbackTypeChanged={setFeedbackType}
                        />
                    ) : (
                        <FeedbackContentStep
                            feedbackType={feedbackType}
                            onFeedbackRestartRequested={handleRestartFeedback}
                            onFeedbackSent={() => sentFeedbackSent(true)}
                        />
                    )}
                </>
            )}

            <footer className="text-xs text-neutral-400">
                Feito com {'\u2764'} por{' '}
                <a
                    className="underline underline-offset-2"
                    href="https://www.linkedin.com/in/guilherme-dornelles-97780b200/"
                >
                    Guilherme
                </a>
            </footer>
        </div>
    );
};

export default WidgetForm;
