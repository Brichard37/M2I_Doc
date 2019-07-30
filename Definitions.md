# POO

## Classe

> Une classe est un type nouveau, créé par un développeur, qui contient :
> - Des données (attributs ou champs)
> - Du code (opérations ou méthodes), les comportements des objets.
>
> Une classe est un plan, un modèle pour créer des objets plus tard

## Classe abstraite

> Une classe non instanciable. Généralement sert à deux usages :
> - classe "ABC" (Abstract Base Class) : classe parents de toute une hiérarchie de classe concrètes (factorisation de code).
> - classe contenant uniquement des méthodes static. Regroupe une bibliothèque particulière (ex : Math. pour les fonctions mathématiques)

## Méthode Abstraite

> Une méthode dont la définition est fournie dans une classe Abstraite (ou une interface) mais son implémentation **devra** être faites par les classes enfant.

## Objet

> Un objet est une instance d'une classe. 
> En Java on utilise l'opérateur new pour cela. Produit une allocation mémoire.
> Dans la JVM le "Garbage Collector" est chargé de libérer l'allocation mémoire des objets.
> Un Objet est l'instance d'une classe, une allocation mémoire structurée suivant le modèle défini la classe


## Encapsulation

> Contrôle de la portée (scope) des éléments situés dans les classes.
>
> "Moins on en montre, mieux on se porte" JMG
>
> L'encapsulation doit être maximale (la portée la plus restreinte posssible)

## Objet DTO

> Data Transfert Objet (Objet de transfert de données)

## Heritage

> Spécialisation d'une classe (le parent) par une autre (l'enfant).
> 
> La classe est aussi du type du parent, et les objets enfants peuvent être substitués aux objets parents (principe de 'Liskov')

## Interface

> Une spécification, sans code (une promesse).
> Peut-être vu comme un contrat (liste de services)

## Polymorphisme (dynamique)

> Le polymorphisme consiste en la redéfinition (override) d'une méthode parent pour l'adapter aux besoins de la classe enfant (la signature de la méthode de la classe parent est rigoureusement la même)

## Généricité (utilisation de paramètre de type)

> Classe (interface également) qui acceptent des paramètre de type, au moment de leur utilisation.
>  
> Exemple : une liste nécessite avant son usage que l'on dise une liste de quoi.

```Java
List<Personne> ou List<T>
```
> C'est une collection 'Type Safe'

## Package

>Espace de nommage, pour éviter les conflits de nom.
>
>Délimitation de portée Java

## Surcharge ('overloading')

>La surcharge permet de définir des méthodes de même nom mais de type et de nombre de paramètres différents (ce qui définit leur 'signature').
>
>La surcharge est résolue à la compilation.

## Constructeur 

>Une méthode de la classe (souvent surchargée) qui est automatiquement appelée lors de l'instanciation des objets.

> Exemple :
```Java
	new Compte("Dupont", 1000);
```

## Garbage collector ('ramasse miettes')

>Le GC libère la mémoire allouée aux objets qui ne sont plus utilisables.


# Terminologie UML

## Opérations

> Equivalent des méthodes dans Java


## Attributs 

> Données dans les classes, équivalents des champs dans JAVA


## Association

> Rapport entre deux classes de types différent.
> - 1 à 1 OneToOne
> - 1 à N OneToMany
> - N à N ManyToMany

## Agrégation

> Association dont :
> - un des côté représente un agrégat (un Objet principal)
> - des constituant (objet agrégé)
> Il n'y a pas de 'couplage sur le cycle de vie' (chaques objet vis une vie autonome)

## Composition

> Il y a couplage des composants sur le cycle de vie de l'objet principal (le 'composé').
>
> Destruction de tout les objets composé lors de la destruction de l'objet principal

## Réalisation 

> Equivalent de l'implémentation d'une interface par une classe


## Généralisation

> Equivalent à l'héritage

## Dépendance 

> Une classe consomme les services d'une autre a travers une interfaces

## Couplage

>Les interactions entre deux portions de logiciels, qui peuvent être controlées et maitrisées, ou indésirable et non-contrôlées.
>
>Interaction implicite (ou explicite) entre deux portions d'un logiciel.

## Bibliothèque (Librairie, abusivement)

> Un ensemble de classe et/ou de fonctions qui résolvent une série de problèmes communs.
> Généralement partagée entre développeurs, pour résoudre leurs problèmes.

## Framework

>Une bibliothèque de code, contenant une application standard dont on va modifier seulement certains aspects. Le framework est beaucoup plus structurant pour son code que la bibliothèque (il impose une architecture applicative).

# En option (vus plus tard) :

## Callback 

> Fonction rappelée par une autre (routine évènementielle)

## Evénement ?
## Thread ?
## Processus ?
## Service ?
## Daemon ?
## Expression lambda ?

## JDK

>Java Développement Kit = outils de dev + JRE

## JRE 

>Java Runtime Environnement : L'installation minimale pour executer un programme Java

## JVM

>Java Virtual Machine, est le JRE en cours d'éxecution, qui controle le programme qui s'éxecute.

# SQL : "Structured Query Language"

## Requete : 

>- Attend un résultat d'un ensemble de données (ici SGBDR)
>- Langage déclaratif ("quoi") et non impératif ("comment")

## Deux sortes d'instructions :

>- DDL ("Data Definition Language") : CREATE DATABASE,DROP DATABASE, CREATE TABLE,
		ALTER TABLE...
>- DML ("Data Manipulation Language") : SELECT, INSERT, UPDATE, DELETE ("CRUD").

## Table :

>Unité de stockage d'un SGBDR : un tableau constitué de colonnes typées et de lignes de données.

## Clé primaire 

>Identifiant unique (technique ou métier) pour une ligne de table.

## Clé étrangère

>Permet d'implémenter la jointure entre deux tables.
>
>La table de détails va comporter une ou plusieurs lignes contenant la valeur
	de clé primaire de la table maitre.

```SQL
SELECT
	FROM
	WHERE (+ opérateurs booléens)
	ORDER BY
	GROUP BY
	HAVING
	INNER JOIN ... ON ...
	OUTER JOIN ... ON ...

INSERT INTO <table> (<nom_colonnes>) VALUES (<valeurs>)

DELETE FROM <table> WHERE <condition>

UPDATE <table> SET <nom_colonne> = <valeur> WHERE <condition>
```

## Requete précompilée :

>Une requête SQL dont le plan d'exécution a été enregistré dans la base de données,
	et pouvant recevoir des paramètres.

## Procédure stockée :

>Un ensemble de requêtes et de traitements (utilisant un langage +- propriétaire)
	enregistré dans la base de données et pouvant recevoir des paramètres.

# Test Unitaire

## Qu'es-ce qu'un test unitaire?

>Ces tests sont de bas niveau (niveau de chaque méthode) et ne testent qu'une chose à la fois

## En quoi c'est différent des autres type de test?

>C'est une approche que les tests fonctionnels (l'application fait elle ce qu'on lui demande?) et techniques (l'application a t'elle une performance, une montée en charge acceptable, est elle sécurisée....)

## Pourquoi le mot unitaire?

>Parce que l'on ne test qu'une chose

## Quels sont les buts d'un framework de test unitaire?

>- de découvrir les méthodes de test
>- de les lancer
>- d'afficher un tableau de bord donnant les résultats du test

## C'est quoi un framework par rapport à une librairie?

>Un framework est une biliothèque imposant une structure à l'application qui s'en sert

## Comment organiser les test unitaire?

>En classes de test, contenant des méthode de test.

## A quoi servent les assertXXXXXX()?

>Sert à communiquer avec le framewwork depuis les méthodes de test

## Quel est le role du 'runner'?

>Lance les tests et affiche le résultat

## Quelles bonnes pratiques pour la conception des tests?

>- Les tests doivent être écrits pour être indépendants de leur ordre d'execution
>- Aucun couplage entre eux
>- Chaque test ne doit tester qu'une seule chose

## C'est quoi le TDD ? "Test Driven Developpement"

>- On écrit les tests avant le code
>- Dès que le test passe on arrête le développement de la méthode


# Servlet / JSP

## C'est quoi un Serveur d'application && En quoi c'est différent d'un simple serveur web?

>Un serveur d'application permet de servir des contenu dynamique (avec une execution serveur).
>En Java il y a une norme (Java EE) pour les serveurs d'applications qui sont tous compatibles.

## C'est quoi un servlet?

>Une classe Java, dont les méthodes sont invoquées automatiquementpar des requêtes http (doGet(), doPost(), doDelete(), doPut, ciblant l'URL de publication du servlet)

## Pourquoi un servlet ne devrait pas directement envoyer de l'HTML?

>Parce que la création de pages html n'est pas généralement faite par les codeurs. On sous-traite la fabrication de l'html aux pages JSP.

## Comment est faite une page JSP?

>1- Un gabarit de page HTML CSS et JS.
>2- Des balises spéciales, exécutées sur le serveur, qui produisent un contenu dynamique.


## Ou mettre les pages JSP?

>Si on veut interdire un accès direct à ces pages on les placent dans le dossier WEB-INF.
>Si on autorise un accès direct on peut les laisser dans WEB-CONTENT(Le dossier de publication).(**Soyez propre rangez dans des dossiers**)

## C'est quoi la session?

>Ce sont des données spécifiques à un utilisateur qui sont automatiquement mises à disposition de l'application lorsque l'utilisateur fait une requete
Une session expire au bout de quelques minutes ( par défaut 30 minutes pour Tomcat). 

## C'est quoi le RequestDispatcher?

>Le RD sert a transmettre le traitement d'une requete à une autre partie (un autre servlet, une page JSP, une page HTML) de l'application.
>Le RD est une interface avec deux méthodes :
>- forward(req,resp) : passe le controle definitivement à une autre partie de l'appli web.
>- include(req,resp) : passe la main a une autre partie de l'appli mais le controle revient a l'appelant.

# Javascript

>JS est un langage 'fonctionnel'.
>Les langages fonctionnels traitent les fonctions comme des données ordinaires :
> - on peut les mettre dans une variable.
> - on peut les recevoir comme paramètre.
> - on peut les retourner.

## Où peut-on utiliser du JS?

> 1 - Dans le navigateur où JS peut controler (en partie) le navigateur et le manipuler via le DOM
> 2 - N'importe où grace a node JS

## Quel est la différence entre JS et ECMAScript? 

>'ES2016', 'ES6', 'ES2017' ect...
> Javascript est le nom du langage dont les versions normalisées par l'ECMA, s'appellent ES5, ES6, ES2016, ect...

# Ajax et JQuery

## Que veut dire AJAX?

> - Asynchronous
> - JavaScript
> - And
> - XML (eXtensible Markup Langage)

> Le JS va effectuer des requetes serveur en tâche de fond (en mode asynchrone, non bloquant) et mettre à jours la page avec les données (souvent en JSON)

## Quel est l'objet utilisé en JS pour faire de l'AJAX?

> Le XMLHttpRequest, qui est une propriété de l'objet window

## Quel est l'intéret de JQuery

> - d'uniformiser le script pour être indépendant du modèle de navigateur
> - simplifier le code JS pour les tâches habituelles(requeter le DOM, modifier le DOM et requetes AJAX)

## Quelles sont les fonctions AJAX importantes de JQuery?

> La version complète est $.ajax() mais on utilise souvent les versions simplifiées :

```Javascript
 $.get(url, data, callback, format)
 $.post(url,data,callback, format)
 $.getJSON(url, data, callback)
 ```
 ## Quelles pages faut-il 'ajaxifier' dans une application web?

 > Les pages sur lesquelles l'utilisateur tavaille longuement

 ## Application SPA (single page application)?

 > Toute l'application s'execute dans une seule page HTML et le script y dessine tout. Le but est de remplacer complètement une application locale. 

# API

## Qu'est une API?

> Application Programming Interface, c'est une interface de programmation pour une technologie

## WebStorage

> Le script peut stocker les données dans le navigateur (SessionStorage et le LocalStorage)

## IndexedDB

> une mini base de données 'orientée objet' présente dans chaque navigateur

## Géolocalisation

> Localisation du navigateur

## Media

> video H264, cisco
> WebM

## Dessin 2D

```HTML
<canvas></canvas> //dessin bitmap
<svg></svg>
```
## Dessin 3D

> Exemple : threejs.org
>
> WebGL (Open GL dans une page web)


## WebSockets

> Utilisation d'une connexion directe entre client et server, à la demande du client
> // Server Side Events (techno)
> Intercepté par le client

## WebWorkers

> JS multithread

 # Divers

 ## CMS (content management system)

 > Drupal, Wordpress, Joomla, Sugar

 # ORM, JPA, Hibernate

 ## Qu'est-ce qu'un ORM?

 > "Object Relational Mapping" : Mapping entre les objets en mémoires et la base de données.
 > Maintient une synchronisation entre les données des objets en mémoire  et le SGBD. 
 > Rend donc les objets persistant

 ## Qu'est-ce que JPA?

 > "Java persistence Architecture" : JPA est une norme Java qui définit pour tous les moteurs de persistance (hibernates, eclipseLink, iBatis, OpenJPA ect...).
 > La norme a respecter.
> 
> Gavin King (créateur d'Hibernate) a présidé la normalisation de JPA (version 2.3 actuelle)

## Qu'est-ce qu' Hibernate?

> Hibernate est un produit, une simple bibliothèque Java qui implément la norme JPA

## Qu'est-ce qu'une unitée de persistance (persistence unit)?

> L'ensemble des réglage (définis dans persistence.xml) permettant à JPA de se connecter à une base de données

## Qu'est-ce qu'une Entité?

> Une classe (et donc ses objets) persistant.

## Qu'est-ce qu'un Entity Manager (Gestionnaure d'entitées) ?

> Classe de JPA chargée d'enregistrer, de recharger et de supprimer (éventuellement) les objets enregistrés (les entités). Supervise toutes les opérations de persistance des objets.
>
> Créé par un EntityManagerFactory ou 'injecté' par le serveur (Pattern d'injection de dépendances). 

## Qu'est-ce qu'une DataSource?

> Configuration défini de connexion à une base de données défini et maintenue par le serveur d'application.
>
> Une application peut s'en servir (elle ne connait que son nom) sans connaitre les détail de la connexion.

## Qu'est-ce que le contexte de persistance (persistence context)?

> Cache de premier niveau géré par l'EntityManager dnas lequel les objets doivent se trouver pour que JPA puisse les gérer.
>
> Pour mettre un objet dans ce cahce on peut :
>- appeler persist()
>- appeler find()
>- faire une requête JPQL
>- merge() qui reconnecte un objet au cache...