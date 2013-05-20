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

- Breve histórico.
- Modos.
- Edição básica de texto.
- Motivação de porque usar o Vim 100% do tempo.

tmux
----

- Detach.
- Múltiplas janelas.
- Pair programming.
- Vimux.
