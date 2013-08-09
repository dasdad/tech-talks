Segurança da Informação
=======================

Motivação
---------

* Muita informação importante nossa é guardada em servidores de terceiros. Por
  exemplo, Google e Dropbox.
* Eles têm [preocupações][1] [com][2] [segurança][3], mas também têm brechas:
  * [Dropbox otimiza o uso de espaço não armazenando arquivos repetivos][4].
    Para isso, eles precisam guardar as chaves de criptografia do lado deles.
  * Além disso, [eles entregariam seus dados para o governo][5], se fosse
    pedido.
  * De fato, [o texto sobre as chaves de criptografia deles mudou][6] de:
    > All files stored on Dropbox servers are encrypted (AES256) and are
    > inaccessible without your account password.
    para:
    > All files stored on Dropbox servers are encrypted (AES 256).
  * Isso pode ser um vetor de ataque. Se um invasor conseguir as chaves,
    consegue ver nossos arquivos.
  * Uma invasão é improvável, afinal eles têm várias medidas de segurança.
    Mas existe algo pior, funcionários não têm autorização para acessar os
    arquivos, mas - tecnicamente - [têm a possibilidade][7]. A restrição é
    puramente política.
  * Problemas com isso já aconteceram, por exemplo com o funcionário do Google
    que foi [demitido][8] por ver [informações de usuários][9].
* Além disso, [NSA][10].
* Risco é um produto da chance de um ataque acontecer e do impacto causado por
  ele. Se por um lado as probabilidades de sermos atacados serem muito
  pequenas, por outro o impacto pode ser absudo. Por exemplo, um notebook nosso
  que seja roubado pode expor:
  * Todo o código-fonte dos nossos produtos.
  * Chaves de servidores produção.
  * Nossos prospectos clientes.
  * Trocas de e-mails sigilosas com clientes e investidores.
* O custo de implementar algumas medidas de segurança é zero. Então a relação
  custo/benefício é excelente!

Soluções
--------

* [Criptografia][11] é mais uma daquelas coisa que são que nem violência. Se
  não estão resolvendo seu problema é porque você não está usando o suficiente.
  * Examplo: [Cifra de César][12].
    * [ROT13][13].
    * Dizem que em _2001 - Uma Odisseia no Espaço_ o nome HAL era uma cifra de
      IBM, porque ela não teria aceitado ceder o nome para o computador do
      filme. [O autor nega dizendo ser uma coincidência][14].
* Criptografia do lado do cliente com [chaves simétricas][15] resolvem o
  problema do Dropbox.
  * Alternativas ao Dropbox:
    * [Wuala][16].
    * [SpiderOak][17].
  * Adicionar uma camada de criptografia:
    * [TrueCrypt][18].
      * Vantagens:
        * Funciona em todas as plataformas com pouco esforço.
      * Desvantagens:
        * É preciso saber o tamanho do que será armazenado com antecedência.
        * O espaço é ocupado mesmo não sendo utilizado. Felizmente o Dropbox
          é inteligente para só fazer upload/download dos
          [blocos alterados][19], então pelo menos não há penalização de
          transferência. Mas outros serviços podem não fazer o mesmo.
    * [EncFS][20].
      * Vantagens:
        * Cresce junto com os dados armazenados, sem precisar de pre-alocação.
      * Desvantagens:
        * Continuam visíveis:
          * Quantidades de arquivos.
          * Tamanho dos arquivos.
          * Tamanho dos nomes dos arquivos com um precisão de alguns
            caracteres.
        * Instalar no [OS X][21] e no [Windows][22] não é tão simples.
    * Desvantagens de usar estes sistemas:
      * Quando for compatilhar uma pasta, é preciso compatilhar as chaves.
      * Não será possível visualizar os arquivos na interface do Dropbox ou
        pelo celular.
    * Portanto, não recomendo que use para tudo, só para informações sensíveis.
      Que tal um `~/Dropbox/encrypted`.
* "Legal, mais um senha. Vou usar `mudar123` como faço em todo lugar!"
  Nãããããão! Use um [cofre de chaves][23].
  Senhas como [`correct horse battery staple`][24] são legais, mas não é
  razoável decorar dezenas delas. Use-as como senha do cofre!
  * Serviços:
    * [LastPass][25].
    * [1Password][26].
  * Soluções off-line:
    * [KeePass][27].
* Criptografia de ponta a ponta com [chaves assimétricas][28] resolvem o
  problema da comunicação entre duas partes.
  * Chaves simétricas não funcionariam porque para transmití-las seria
    necessário um canal de comunicação segura. Se você tem um canal de
    comunicação segura, passa a mensagem logo de uma vez :stuck_out_tongue:.
  * São usadas duas chaves, uma privada e outra pública. A privada deve ser
    guardada em segurança. A pública deve ser divulgada para todo mundo.
    O que a chave pública criptografa só a chave privada pode descriptografar
    e vise-versa.
* Mais sobre isso na próxima Tech Talk sobre PGP/GPG com o Navarro!


[1]: https://www.dropbox.com/
[2]: https://www.dropbox.com/help/27/en
[3]: https://blog.dropbox.com/2011/04/privacy-security-your-dropbox/
[4]: http://paranoia.dubfire.net/2011/04/how-dropbox-sacrifices-user-privacy-for.html
[5]: http://www.businessinsider.com/dropbox-updates-security-terms-of-service-to-say-it-can-decrpyt-files-if-the-government-asks-it-to-2011-4
[6]: http://www.wired.com/threatlevel/2011/05/dropbox-ftc/
[7]: http://www.wired.com/threatlevel/2011/05/dropbox-ftc/
[8]: http://techcrunch.com/2010/09/14/google-engineer-spying-fired/
[9]: http://www.wired.com/threatlevel/2010/09/google-spy/
[10]: http://www.theguardian.com/world/2013/aug/09/nsa-loophole-warrantless-searches-email-calls
[11]: https://pt.wikipedia.org/wiki/Criptografia
[12]: https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar
[13]: http://www.rot13.com/
[14]: https://pt.wikipedia.org/wiki/2001:_A_Space_Odyssey#cite_ref-23
[15]: https://pt.wikipedia.org/wiki/Algoritmo_de_chave_sim%C3%A9trica
[16]: https://www.wuala.com/
[17]: https://spideroak.com/
[18]: http://www.truecrypt.org/
[19]: http://emmanuelbernard.com/blog/2013/07/01/encrypt-your-dropbox-with-encfs-on-mac-os-x/#comment-948784199
[20]: http://www.arg0.net/encfs
[21]: http://emmanuelbernard.com/blog/2013/07/01/encrypt-your-dropbox-with-encfs-on-mac-os-x
[22]: http://www.webupd8.org/2011/06/encrypt-your-private-dropbox-data-with.html
[23]: http://i00.i.aliimg.com/photo/v0/230565082/Electronic_digital_key_safe_box_holding_100.jpg
[24]: http://xkcd.com/936/
[25]: https://lastpass.com/
[26]: https://agilebits.com/onepassword
[27]: http://keepass.info/
[28]: https://pt.wikipedia.org/wiki/Criptografia_de_chave_p%C3%BAblica
