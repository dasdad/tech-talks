Command Line
============

ssh
---

- Remote secure shells.
- Example: access VM 2 from VM 1. Asking for password sucks!
- ssh keys.
    - Symmetric keys vs. asymmetric keys.
    - Creation: `ssh-keygen(1)`
        - `-t rsa` is the default, but it doesn't hurt to specify.
        - `-C <commentary>` if you want to remember this key.
    - Two files are created: `~/.ssh/id_rsa` and `~/.ssh/id_rsa.pub`.
    - Note permissions `600` on `~/.ssh/id_rsa`.
    - https://help.github.com/articles/generating-ssh-keys
- Passwordless login.
    - Add contents of `~/.ssh/id_rsa.pub` from VM 1 to a new line in
      `~/.ssh/authorized_keys` in VM 2.
- VM 1 has access to VM 2 and VM 3. VM 2 doesn't have access to VM 3. Could VM2
  borrow credentials from VM1?
- `ssh-agent(1)` to the rescue! Prevents you from typing password for private
  keys and more!
- Agent forwarding.
    - `~/.ssh/config` with `ForwardAgent` for one `Host`.
- Read docs for `ssh-agent(1)`, `ssh-add(1)` and `ssh_config(5)` for more on
  the subject.

vim
---

- Brief history.
    - Vi in 1976.
        - Visual, in contrast to Ex.
        - Slow teletypes.
        - No arrows in keyboard.
    - Vi iMproved in 1991.
        - Sane usage in modern computers.
        - Clean screen on deletion.
        - Stable, huge installed base.
- Modes.
    - Normal.
    - Insertion.
    - Visual.
    - More...
- Commands.
    - `:w` for writing.
    - `:q` for quitting.
    - `:wq` combining.
- Steep learning curve. But it's like learning a new language. It sort of makes
  sense with the passing of time.
- Why use it beyond servers?
    - Extremely fast and stable.
    - [Mouse free development](http://pragprog.com/book/bhtmux/tmux). Feels
      more productive.
    - One tool to rule them all.
    - Huge and active user base. Specially in communities influenced by Unix
      philosophy such as Ruby.
    - Lots of plugins and features!
    - A taste: macros.
      Turn:
      ```
      {
        :banana  => 'uhull',
        :another => 'aha',
        :a       => 'nd',
        :please  => 'stop'
      }
      ```
      into:
      ```
      {
        banana:   'uhull',
        another:  'aha',
        a:        'nd',
        please:   'stop'
      }
      ```
      with: `f:xf Pf=vldj0`.
    - Spell checking.
- A piece of advice, default configs suck! Starting using Vim by configuring it!
  It's a legacy for future generations.

tmux
----

- Detach.
- Remote pair programming.
- Multiple windows and panes.
- Vimux for interactive programming.
- Default configs for tmux aren't the best.

zsh
---

- Autocorrect.
- Smarter autocomplete - gets capitalization in folder names right.
- Simpler to customize.
- oh-my-zsh.
    - Themes and plugins.
