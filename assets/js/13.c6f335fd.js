(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{382:function(e,t,a){e.exports=a.p+"assets/img/zarb-ansible.eba83a3c.png"},415:function(e,t,a){"use strict";a.r(t);var r=a(5),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"deploy-using-ansible"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#deploy-using-ansible"}},[e._v("#")]),e._v(" Deploy Using Ansible")]),e._v(" "),r("p",[e._v("In this tutorial, you will learn how to deploy Zarb into your Virtual Private Server (VPS) without\ncompiling Zarb and using docker.")]),e._v(" "),r("h2",{attrs:{id:"🎮-what-is-ansible"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#🎮-what-is-ansible"}},[e._v("#")]),e._v(" 🎮 What Is Ansible?")]),e._v(" "),r("div",{staticClass:"custom-block quote"},[r("p",[e._v("Ansible is all about automation, it requires instructions to accomplish each job. With everything\nwritten down in simple script form, it's easy to do version control.")]),e._v(" "),r("p",[e._v("In Ansible, there are two computers: the "),r("strong",[e._v("control node")]),e._v(" and "),r("strong",[e._v("managed nodes")]),e._v(". The control node is\nyour computer that runs Ansible. A managed node is any device being managed by the control node.")]),e._v(" "),r("div",{staticClass:"custom-block right"},[r("p",[e._v("From "),r("a",{attrs:{href:"https://opensource.com/resources/what-ansible",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenSource.com"),r("OutboundLink")],1)])])]),e._v(" "),r("p",[r("img",{attrs:{src:a(382),alt:"Deploy Zarb using ansible"}})]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("Ansible on Windows")]),e._v(" "),r("p",[e._v("Unfortunately Windows is\n"),r("a",{attrs:{href:"http://blog.rolpdog.com/2020/03/why-no-ansible-controller-for-windows.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("not supported"),r("OutboundLink")],1),e._v(" for the\ncontrol node. If you want to run an Ansible controller on Windows, use WSL.")])]),e._v(" "),r("h2",{attrs:{id:"why-ansible"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#why-ansible"}},[e._v("#")]),e._v(" Why Ansible?")]),e._v(" "),r("p",[e._v("Deploying Zarb is not a one time task. You may update the node time to time or change the\nconfiguration or even restart the node. Ansible helps you to automate the deployment process. If you\nare going to run a full node in Zarb, we recommend to use Ansible or Terraform for deploying Zarb.")]),e._v(" "),r("h2",{attrs:{id:"requirements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),r("p",[e._v("Using a linux cloud server is the best way to run a validator in Zarb network. You may get a virtual\nprivate server from providers like Amazon, Microsoft, Linde, Alibaba, ArvanCloud, etc.")]),e._v(" "),r("h3",{attrs:{id:"recommended-hardware"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#recommended-hardware"}},[e._v("#")]),e._v(" Recommended Hardware")]),e._v(" "),r("ul",[r("li",[e._v("Processor: Two dedicated core of CPU")]),e._v(" "),r("li",[e._v("Memory: Two gigabyte of RAM")]),e._v(" "),r("li",[e._v("Storage: 10 Gigabytes of free space disk")]),e._v(" "),r("li",[e._v("Network: A broadband Internet connection")])]),e._v(" "),r("h2",{attrs:{id:"🛡️-securing-the-server"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#🛡️-securing-the-server"}},[e._v("#")]),e._v(" 🛡️ Securing the server")]),e._v(" "),r("p",[e._v("The first step is securing your server. You may read this\n"),r("a",{attrs:{href:"https://www.linode.com/docs/guides/securing-your-server/",target:"_blank",rel:"noopener noreferrer"}},[e._v("guid line"),r("OutboundLink")],1),e._v(" to learn how to setup your\nsever more secure.")]),e._v(" "),r("h2",{attrs:{id:"step-by-step"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#step-by-step"}},[e._v("#")]),e._v(" Step by Step")]),e._v(" "),r("p",[e._v("Make sure you have installed\n"),r("a",{attrs:{href:"https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ansible"),r("OutboundLink")],1),e._v(" in\nyour local machine and you have\n"),r("a",{attrs:{href:"https://www.google.com/search?q=access+to+your+server+through+SSH",target:"_blank",rel:"noopener noreferrer"}},[e._v("access to your server through SSH"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("All the commands in this tutorial will be run in your local machine (probably your laptop) and you\ndon't need to ssh into your server.")])]),e._v(" "),r("p",[e._v("Also if you have installed firewall in your server machine, make sure these port are open:")]),e._v(" "),r("ul",[r("li",[e._v("8421 for p2p network")]),e._v(" "),r("li",[e._v("8080 for gRPC gateway")]),e._v(" "),r("li",[e._v("9090 for gRPC")])]),e._v(" "),r("p",[e._v("First you need to clone this repository:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("git clone https://github.com/zarbchain/zarb-deploy-ansible-example\ncd zarb-deploy-ansible-example\n")])])]),r("p",[e._v("Open "),r("code",[e._v("inventory.yml")]),e._v(" and update "),r("code",[e._v("ansible_host")]),e._v(" with your server remote ip address. something like:\n"),r("code",[e._v("root@11.22.33.44")]),e._v(".")]),e._v(" "),r("p",[e._v("Run "),r("code",[e._v("ansible all -m gather_facts")]),e._v(" to make sure ansible works fine.")]),e._v(" "),r("p",[e._v("Now, you need to generate two keys in your local machine. One for the validator and another for\ncollecting the rewards. To generate new keys you needs to execute the Zarb in your local machine.\nYou can either "),r("a",{attrs:{href:"https://github.com/zarbchain/zarb-go/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("download"),r("OutboundLink")],1),e._v(" the latest precompiled\nbinaries or "),r("RouterLink",{attrs:{to:"/guide/run-compile.html"}},[e._v("compile")]),e._v(" it from the source code.")],1),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("zarb key generate -p ~/zarb/keystore/validator_key.json\nzarb key generate -p ~/zarb/keystore/mintbase_key.json\n")])])]),r("p",[e._v("This command will generate new keys and save them at: "),r("code",[e._v("~/zarb/keystore/")])]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),r("p",[e._v("Make sure you write down the Mnemonics of your keys. You can recover your keys from Mnemonics, if\nyou lose them.")]),e._v(" "),r("p",[e._v("You should know that you are responsible for the safety of your key.")])]),e._v(" "),r("p",[e._v("To store and send validator private key to server, we use\n"),r("a",{attrs:{href:"https://docs.ansible.com/ansible/latest/user_guide/vault.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ansible vault"),r("OutboundLink")],1),e._v(". Ansible Vault\nencrypts variables so you can protect sensitive content such as secret keys.")]),e._v(" "),r("p",[e._v("Before creating Ansible Vault, you need to know the private key for the validator. Using\n"),r("code",[e._v("zarb inspect")]),e._v(" command you can see the private key.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("zarb key inspect -e ~/zarb/keystore/validator_key.json\n")])])]),r("p",[e._v("Copy the private key. You will need to paste in inside Ansible Vault in the next step.")]),e._v(" "),r("p",[e._v("Now let's create a vault and add the validator private key inside the vault.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("ansible-vault create --vault-id vault@prompt tasks/vault.yml\n")])])]),r("p",[e._v("Set a strong password for the Vault.")]),e._v(" "),r("p",[e._v("It opens up an editor. Once you're inside, treat this like a normal variable file: add ---, then a\nnew variable:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("---\nvault_validator_key: <validator_private_key>\n")])])]),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("The colon must be followed by a space.")])]),e._v(" "),r("p",[e._v("Ansible will encrypt the key and save inside "),r("code",[e._v("task/vault.yml")]),e._v(". You can open the "),r("code",[e._v("task/vault.yml")]),e._v(" and\nsee the content. It should be encrypted.")]),e._v(" "),r("p",[e._v("One more step, open the config file and update "),r("code",[e._v("MintbaseAddress")]),e._v(". This can be different from the\nvalidator address. You can also change other configs like "),r("code",[e._v("Moniker")]),e._v(", etc.")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("Address in Zarb starts with "),r("code",[e._v("zrb1...")])])]),e._v(" "),r("h2",{attrs:{id:"installing-ansible-plugins"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#installing-ansible-plugins"}},[e._v("#")]),e._v(" Installing Ansible Plugins")]),e._v(" "),r("p",[e._v("Before deploying Zarb, you have to install two plugins for Ansible.")]),e._v(" "),r("p",[e._v("First install the "),r("code",[e._v("geerlingguy.docker")]),e._v(" plugin. This plugin will install docker for the server\nmachine.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("ansible-galaxy install geerlingguy.docker\n")])])]),r("p",[e._v("And then install the "),r("code",[e._v("geerlingguy.ntp")]),e._v(" plugin. This plugin will synchronizing your server Time using\nNetwork Time Protocol (NTP).")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("ansible-galaxy install geerlingguy.ntp\n")])])]),r("h2",{attrs:{id:"deploy-zarb"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#deploy-zarb"}},[e._v("#")]),e._v(" Deploy Zarb")]),e._v(" "),r("p",[e._v("Now you can deploy Zarb by running deploy playbook:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("ansible-playbook --ask-become-pass --vault-id tasks/vault@prompt tasks/deploy.yml\n")])])]),r("p",[e._v('Now you can check "http://<ip_address>:8080" to see if your node works fine and it\'s syncing with\nthe main network.')]),e._v(" "),r("h2",{attrs:{id:"update-zarb"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#update-zarb"}},[e._v("#")]),e._v(" Update Zarb")]),e._v(" "),r("p",[e._v("If you change the configuration or if you want to update the node version, run the deploy playbook\nagain. This will update the docker image and restart the node.")]),e._v(" "),r("p",[e._v("Welcome to Zarb network 🤝")])])}),[],!1,null,null,null);t.default=s.exports}}]);