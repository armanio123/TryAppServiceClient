import * as React from 'react';

interface ILinkProps {
    url: string,
    timeLeft: number
}
type LinkProps = ILinkProps;


export class LinkComponent extends React.Component<LinkProps> {
    public render() {
        return (
            <div className="link">
                <h2>You have an existing app service trial:</h2>
                <p><a href={this.props.url}>{this.props.url}</a></p>
            </div>
        );
    }
}
