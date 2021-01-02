import { extend } from 'flarum/extend';
import Button from 'flarum/components/Button';
import CommentPost from 'flarum/components/CommentPost';
import PostControls from 'flarum/utils/PostControls';

import VotesModal from './components/VotesModal';
import setting from './helpers/setting';
import saveVote from './helpers/saveVote';

export default function () {
    extend(PostControls, 'moderationControls', function (items, post) {
        if (post.canSeeVotes()) {
            items.add('viewVotes', [
                m(
                    Button,
                    {
                        icon: 'fas fa-thumbs-up',
                        onclick: () => {
                            app.modal.show(VotesModal, { post });
                        },
                    },
                    app.translator.trans('fof-gamification.forum.mod_item')
                ),
            ]);
        }
    });

    extend(CommentPost.prototype, 'actionItems', function (items) {
        const post = this.attrs.post;
        const hasDownvoted = post.hasDownvoted();
        const hasUpvoted = post.hasUpvoted();

        const icon = setting('iconName') || 'thumbs';

        // We set canVote to true for guest users so that they can access the login by clicking the button
        const canVote = !app.session.user || post.canVote();

        items.add(
            'votes',
            <div className={`CommentPost-votes ${setting('useAlternateLayout', true) && 'alternateLayout'}`}>
                {Button.component({
                    //icon: this.voteLoading || `fas fa-${icon}-up`,
                    className: 'Post-vote Post-upvote',
                    style: hasUpvoted && {
                        color: app.forum.attribute('themePrimaryColor'),
                    },
                    loading: this.voteLoading,
                    disabled: this.voteLoading || !canVote,
                    onclick: () => saveVote(post, !hasUpvoted, false, (val) => (this.voteLoading = val)),
                },'推')}

                <label className="Post-upPoints">{post.upPoints()?post.upPoints():'-'}</label>

                {Button.component({
                    //icon: this.voteLoading || `fas fa-${icon}-down`,
                    className: 'Post-vote Post-downvote',
                    style: hasDownvoted && {
                        color: app.forum.attribute('themePrimaryColor'),
                    },
                    loading: this.voteLoading,
                    disabled: this.voteLoading || !canVote,
                    onclick: () => saveVote(post, false, !hasDownvoted, (val) => (this.voteLoading = val)),
                },'噓')}

                <label className="Post-downPoints">{post.downPoints()>=2?post.downPoints():'-'}</label>

            </div>,
            10
        );
    });
}
