import { div, h1, form, input, label } from '@cycle/dom';
import { Observable } from 'rx';
import Gravatar from '../..';

const intent = DOM => {
  const input$ = DOM.select('input');
  input$.events('autofocus').map(ev => ev.target.select());
  return input$.events('input').map(ev => ev.target.value).startWith(null);
};

const view = (...args) => Observable.combineLatest(...args, (email, gravatarVtree) =>
  div([
    h1(),
    form(
      label({
        for: 'email'
      }, [
        'Type your email: ',
        input('#email', {
          type: 'email',
          value: email,
          autofocus: true
        })
      ])
    ),
    gravatarVtree
  ])
);

export default ({ DOM }) => {
  const email$ = intent(DOM);
  const gravatarProps$ = email$.filter(email => email && email.length > 0).map(email => ({ email })); // trying to lookup a gravatar without an email will fail
  const gravatar = Gravatar({ props$: gravatarProps$ });
  return {
    DOM: view(email$, gravatar.DOM.startWith(null))
  };
};
