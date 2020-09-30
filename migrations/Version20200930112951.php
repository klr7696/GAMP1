<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200930112951 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE categorie_ligne_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE ligne_depense_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE livre_compte_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE categorie_ligne (id INT NOT NULL, nom_cat VARCHAR(50) NOT NULL, abreviation_cat VARCHAR(10) NOT NULL, description_cat VARCHAR(255) DEFAULT NULL, creation_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, modif_at TIMESTAMP(0) WITHOUT TIME ZONE DEFAULT NULL, is_affecter BOOLEAN NOT NULL, is_non_supprimable BOOLEAN NOT NULL, PRIMARY KEY(id))');
        $this->addSql('COMMENT ON COLUMN categorie_ligne.creation_at IS \'(DC2Type:datetime_immutable)\'');
        $this->addSql('CREATE TABLE ligne_depense (id INT NOT NULL, livre_compte_id INT NOT NULL, categorie_ligne_id INT DEFAULT NULL, compte_parent_id INT DEFAULT NULL, numero_ligne INT NOT NULL, libelle_ligne VARCHAR(255) NOT NULL, denomination_ligne VARCHAR(100) NOT NULL, description_ligne VARCHAR(255) DEFAULT NULL, hierachie_ligne VARCHAR(50) NOT NULL, creation_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, modif_at TIMESTAMP(0) WITHOUT TIME ZONE DEFAULT NULL, is_mouvementer BOOLEAN NOT NULL, is_non_supprimable BOOLEAN NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_AB9CA96E5DA3B68A ON ligne_depense (livre_compte_id)');
        $this->addSql('CREATE INDEX IDX_AB9CA96E62C4CF1C ON ligne_depense (categorie_ligne_id)');
        $this->addSql('CREATE INDEX IDX_AB9CA96EB1F4F442 ON ligne_depense (compte_parent_id)');
        $this->addSql('COMMENT ON COLUMN ligne_depense.creation_at IS \'(DC2Type:datetime_immutable)\'');
        $this->addSql('CREATE TABLE livre_compte (id INT NOT NULL, annee_ref DATE NOT NULL, decret_livre VARCHAR(100) NOT NULL, adoption_date DATE NOT NULL, execution_date DATE NOT NULL, description_livre VARCHAR(255) DEFAULT NULL, creation_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, modif_at TIMESTAMP(0) WITHOUT TIME ZONE DEFAULT NULL, is_activer BOOLEAN NOT NULL, is_non_supprimable BOOLEAN NOT NULL, PRIMARY KEY(id))');
        $this->addSql('COMMENT ON COLUMN livre_compte.annee_ref IS \'(DC2Type:date_immutable)\'');
        $this->addSql('COMMENT ON COLUMN livre_compte.adoption_date IS \'(DC2Type:date_immutable)\'');
        $this->addSql('COMMENT ON COLUMN livre_compte.execution_date IS \'(DC2Type:date_immutable)\'');
        $this->addSql('COMMENT ON COLUMN livre_compte.creation_at IS \'(DC2Type:datetime_immutable)\'');
        $this->addSql('ALTER TABLE ligne_depense ADD CONSTRAINT FK_AB9CA96E5DA3B68A FOREIGN KEY (livre_compte_id) REFERENCES livre_compte (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE ligne_depense ADD CONSTRAINT FK_AB9CA96E62C4CF1C FOREIGN KEY (categorie_ligne_id) REFERENCES categorie_ligne (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE ligne_depense ADD CONSTRAINT FK_AB9CA96EB1F4F442 FOREIGN KEY (compte_parent_id) REFERENCES ligne_depense (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE ligne_depense DROP CONSTRAINT FK_AB9CA96E62C4CF1C');
        $this->addSql('ALTER TABLE ligne_depense DROP CONSTRAINT FK_AB9CA96EB1F4F442');
        $this->addSql('ALTER TABLE ligne_depense DROP CONSTRAINT FK_AB9CA96E5DA3B68A');
        $this->addSql('DROP SEQUENCE categorie_ligne_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE ligne_depense_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE livre_compte_id_seq CASCADE');
        $this->addSql('DROP TABLE categorie_ligne');
        $this->addSql('DROP TABLE ligne_depense');
        $this->addSql('DROP TABLE livre_compte');
    }
}
