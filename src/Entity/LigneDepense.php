<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\LigneDepenseRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=LigneDepenseRepository::class)
 */
class LigneDepense
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     */
    private $numeroLigne;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $libelleLigne;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $denominationLigne;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $descriptionLigne;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $hierachieLigne;

    /**
     * @ORM\Column(type="datetime_immutable")
     */
    private $creationAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $modifAt;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isMouvementer;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isNonSupprimable;

    /**
     * @ORM\ManyToOne(targetEntity=LivreCompte::class, inversedBy="ligneDepenses")
     * @ORM\JoinColumn(nullable=false)
     */
    private $livreCompte;

    /**
     * @ORM\ManyToOne(targetEntity=CategorieLigne::class, inversedBy="ligneDepenses")
     */
    private $categorieLigne;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNumeroLigne(): ?int
    {
        return $this->numeroLigne;
    }

    public function setNumeroLigne(int $numeroLigne): self
    {
        $this->numeroLigne = $numeroLigne;

        return $this;
    }

    public function getLibelleLigne(): ?string
    {
        return $this->libelleLigne;
    }

    public function setLibelleLigne(string $libelleLigne): self
    {
        $this->libelleLigne = $libelleLigne;

        return $this;
    }

    public function getDenominationLigne(): ?string
    {
        return $this->denominationLigne;
    }

    public function setDenominationLigne(string $denominationLigne): self
    {
        $this->denominationLigne = $denominationLigne;

        return $this;
    }

    public function getDescriptionLigne(): ?string
    {
        return $this->descriptionLigne;
    }

    public function setDescriptionLigne(?string $descriptionLigne): self
    {
        $this->descriptionLigne = $descriptionLigne;

        return $this;
    }

    public function getHierachieLigne(): ?string
    {
        return $this->hierachieLigne;
    }

    public function setHierachieLigne(string $hierachieLigne): self
    {
        $this->hierachieLigne = $hierachieLigne;

        return $this;
    }

    public function getCreationAt(): ?\DateTimeImmutable
    {
        return $this->creationAt;
    }

    public function setCreationAt(\DateTimeImmutable $creationAt): self
    {
        $this->creationAt = $creationAt;

        return $this;
    }

    public function getModifAt(): ?\DateTimeInterface
    {
        return $this->modifAt;
    }

    public function setModifAt(?\DateTimeInterface $modifAt): self
    {
        $this->modifAt = $modifAt;

        return $this;
    }

    public function getIsMouvementer(): ?bool
    {
        return $this->isMouvementer;
    }

    public function setIsMouvementer(bool $isMouvementer): self
    {
        $this->isMouvementer = $isMouvementer;

        return $this;
    }

    public function getIsNonSupprimable(): ?bool
    {
        return $this->isNonSupprimable;
    }

    public function setIsNonSupprimable(bool $isNonSupprimable): self
    {
        $this->isNonSupprimable = $isNonSupprimable;

        return $this;
    }

    public function getLivreCompte(): ?LivreCompte
    {
        return $this->livreCompte;
    }

    public function setLivreCompte(?LivreCompte $livreCompte): self
    {
        $this->livreCompte = $livreCompte;

        return $this;
    }

    public function getCategorieLigne(): ?CategorieLigne
    {
        return $this->categorieLigne;
    }

    public function setCategorieLigne(?CategorieLigne $categorieLigne): self
    {
        $this->categorieLigne = $categorieLigne;

        return $this;
    }
}
