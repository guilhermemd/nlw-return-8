import CloseButton from '../../CloseButton';
import { feedbackTypes } from '../WidgetForm';

type FeedbackTypeStepProps = {
    onFeedbackTypeChanged: (key: FeedbackType | null) => void;
};

type FeedbackType = keyof typeof feedbackTypes;
const FeedbackTypesSteps = ({
    onFeedbackTypeChanged
}: FeedbackTypeStepProps) => {
    return (
        <>
            <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>
                <CloseButton />
            </header>
            <div className="flex py-8 gap-2 w-full ">
                {Object.entries(feedbackTypes).map(([key, value]) => {
                    return (
                        <button
                            key={key}
                            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                            type="button"
                            onClick={() =>
                                onFeedbackTypeChanged(key as FeedbackType)
                            }
                        >
                            <img
                                src={value.image.source}
                                alt={value.image.alt}
                            />
                            <span>{value.title}</span>
                        </button>
                    );
                })}
            </div>
        </>
    );
};
export default FeedbackTypesSteps;
